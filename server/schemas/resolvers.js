const { User } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-_v -password')

                return userData
            }

            throw new AuthenticationError('Not logged in')
        },
        users: async () => {
            return User.find()
                .select('-_v -password')
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-_v -password')
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)

            return { token, user }
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })

            if (!user) {
                throw new AuthenticationError('Incorrect credentials, please try again.')
            }

            const correctPw = await user.isCorrectPassword(password)

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials, please try again.')
            }

            const token = signToken(user)
            return { token, user }
        },

        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { friends: friendId } },
                    { new: true }
                ).populate('friends')

                return updatedUser
            }

            throw new AuthenticationError('You need to be logged in!')
        },

        addMovie: async (parent, { movieId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { movielist: { movieId } } },
                    { new: true }
                )

                return updatedUser
            }
        }
    }
};

module.exports = resolvers;