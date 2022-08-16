import React, { useEffect, useState } from 'react';
import Auth from './components/Auth';
import { useCookies} from 'react-cookie'

// const client = StreamChat.getInstance('5uzparpdtaxp');

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const [channel, setChannel] = useState(null);

  const authToken = cookies.AuthToken

  // useEffect(() => {
    
  // }, []);

  const setupClient = async () => {
    try {
      await client.connectUser(
        {
          id: cookies.UserId,
          name: cookies.Name,
          hashedPassword: cookies.HashedPassword,
        },
        authToken
      );
      const channel = await client.channel('messaging', 'messaging-demo', {
        name: 'Messaging Demo',
      })
      setChannel(channel);

    } catch (err) {
      console.log(err);
    }
  };

  if (authToken) setupClient();

  return (
    <>
      {!authToken && <Auth/>}
      {authToken && <Chat client={client} darkMode={true}>
        <Channel channel={ channel }>
          <Video/>
          <MessagingContainer></MessagingContainer>
        </Channel>
      </Chat>}
    </>
  );
};

export default App;
