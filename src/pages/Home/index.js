import React from "react";
import { BsTv } from "react-icons/bs";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import {
	AiOutlineSearch,
	AiOutlineGlobal,
	AiFillStar,
	AiOutlineFire,
} from "react-icons/ai";
import { BiMoviePlay, BiCaretDown, BiTv } from "react-icons/bi";
export default function Home() {
	const [searchFilter, setSearchFilter] = React.useState("");
	const [activeQueryFilter, setActiveQueryFilter] = React.useState("trending");
	const [list, setList] = React.useState([]);
	React.useEffect(() => {
		fetchList();
	}, [activeQueryFilter, searchFilter]);
	async function fetchList() {
		fetch(
			`https://api.themoviedb.org/3/${activeQueryFilter}/all/day?api_key=93916c935979931b0ffa32a131a1cf5e`
		)
			.then((resp) => resp.json())
			.then((data) => {
				setList(data.results ?? []);
				console.log(data.results);
			});
	}
	return (
		<div
			style={{
				backgroundColor: "#363c47",
				height: "100%",
				minHeight: "100vh",
				width: "100%",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Header setSearchFilter={setSearchFilter} />
			<br /> <br /> <br /> <br />
			<br />
			<div style={{ paddingLeft: 20 }}>
				<ShowList list={list} filterTerm={searchFilter} />
			</div>
			<Footer setActiveQueryFilter={setActiveQueryFilter} />
		</div>
	);
}
export function ShowList(props) {
	const [activePage, setActivePage] = React.useState(1);
	const [currentList, setCurrentList] = React.useState(
		activePage === 1 && props.list.length > 20
			? props.list.splice(0, 20)
			: props.list
	);
	return (
		<Row>
			{props.list.length > 0 &&
				props.list
					//	.filter((item) => {item.original_title.includes(props.filterTerm))
					.map((item, index) => {
						return (
							<Col lg={4} style={{ paddingBottom: 15 }}>
								<Card
									title={
										item.title
											? item.title
											: item.original_title
											? item.original_title
											: item.name
									}
									original_language={item.original_language}
									vote_average={item.vote_average}
									path={item.path}
									release_date={item.release_date}
								/>
							</Col>
						);
					})}
			<Col lg={24}></Col>
		</Row>
	);
}
export function Header(props) {
	return (
		<div
			style={{
				backgroundColor: "#000000",
				//backgroundColor: "rgba(255, 255, 255, 0.9)",
				position: "fixed",
				top: 0,
				width: "100%",
				zIndex: 9,

				flexDirection: "column",
				display: "flex",
				// alignItems: "center",
				// justifyContent: "space-between",
				borderBottomRightRadius: 16,
				borderBottomLeftRadius: 16,
			}}
		>
			<div
				style={{
					flexDirection: "row",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					// paddingTop: 7,
					paddingRight: 7,
				}}
			>
				<div
					style={{
						flexDirection: "row",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						//paddingTop: 20,
						paddingLeft: 25,
						paddingRight: 25,
					}}
				>
					<div
						style={{
							flexDirection: "row",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<BsTv style={{ color: "#fff", fontSize: 50 }} />
						<p
							style={{
								fontSize: 30,
								paddingLeft: 20,
								fontWeight: "bold",
								letterSpacing: 1.5,
								color: "#fff",
							}}
						>
							TrackerVision
						</p>
					</div>
				</div>

				<div
					style={{
						flexDirection: "row",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{/* <span
						style={{
							color: "#fff",
							letterSpacing: 1,
							paddingRight: 15,
							paddingLeft: 15,
							fontWeight: "bold",
							fontSize: 13,
						}}
					>
						Max
					</span> */}
					<div
						style={{
							width: 300,
							borderRadius: 20,
							backgroundColor: "#fff",
							display: "flex",
							alignItems: "center",
							justifyContent: "flex-start",
							paddingLeft: 12,
							paddingTop: 4,
							paddingBottom: 4,
							paddingRight: 10,
							marginRight: 30,
						}}
					>
						<AiOutlineSearch
							style={{ color: "black", fontWeight: "bolder", fontSize: 22 }}
						/>
						<input
							type={"search"}
							style={{
								outline: "none",
								border: 0,
								color: "#000000",
								fontSize: 14,
								width: "100%",
								paddingLeft: 5,
								backgroundColor: "transparent",
							}}
							onChange={(e) => {
								props.setSearchFilter(e.target.value);
							}}
							placeholder="Search...."
						/>
					</div>
					<img
						src="/profilePic.jpg"
						style={{
							objectFit: "cover",
							width: 35,
							height: 35,
							borderRadius: 35 / 2,
							//							border: "2px solid #fff",
							//padding: 1,
						}}
					/>
					<span
						style={{
							color: "#fff",
							letterSpacing: 1,
							paddingRight: 3,
							paddingLeft: 3,
							fontWeight: "bold",
							fontSize: 13,
						}}
					>
						Max
					</span>
					<BiCaretDown
						style={{ color: "#fff", fontSize: 20, cursor: "pointer" }}
					/>
					{/* <div
						style={{
							height: 35,
							width: 1,
							backgroundColor: "#fff",
							marginLeft: 15,
							marginRight: 15,
						}}
					></div>
					<BiLogIn style={{ color: "#fff", fontSize: 20, cursor: "pointer" }} /> */}
				</div>
			</div>
		</div>
	);
}

export function Card(props) {
	return (
		<div
			style={{
				backgroundColor: "#000000",
				width: 200,
				height: 300,
				borderRadius: 6,
				display: "flex",
				flexDirection: "column",
				boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
			}}
		>
			<img
				src={props.path}
				style={{
					objectFit: "cover",
					// borderRadius: 6,
					width: 200,
					height: "100%",
					maxHeight: 200,
				}}
				alt="poster"
			/>
			<div
				style={{
					padding: 5,
					flexDirection: "row",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-evenly",
				}}
			>
				<span style={{ fontSize: 16, color: "#fff", textAlign: "center" }}>
					<AiFillStar /> {props.vote_average}
				</span>
				<span
					style={{
						paddingLeft: 10,
						fontSize: 16,
						color: "#fff",
						textAlign: "center",
					}}
				>
					<AiOutlineGlobal /> {props.original_language}
				</span>
				<span
					style={{
						paddingLeft: 10,
						fontSize: 16,
						color: "#fff",
						textAlign: "center",
					}}
				>
					{
						//moment(props.release_date, "YYYY-DD-MM")
						props.release_date
					}
				</span>
			</div>
			<span
				style={{
					fontSize: 17,
					color: "#fff",
					textAlign: "left",
					paddingLeft: 7,
					fontWeight: "bold",
				}}
			>
				{props.title}
			</span>
		</div>
	);
}
export function Footer(props) {
	return (
		<div
			style={{
				flexDirection: "row",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-evenly",

				backgroundColor: "black",
				//backgroundColor: "rgba(255, 255, 255, 0.9)",
				position: "fixed",
				bottom: 0,
				width: "100%",
				zIndex: 9,

				borderTopRightRadius: 16,
				borderTopLeftRadius: 16,
				padding: 10,
			}}
		>
			<div
				style={{
					flexDirection: "row",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					cursor: "pointer",
				}}
				onClick={() => {
					props.setActiveQueryFilter("trending");
				}}
			>
				<AiOutlineFire
					style={{
						fontSize: 25,
						color: "#fff",
						letterSpacing: 1,
						fontWeight: "bolder",
					}}
				/>
				<span
					style={{
						fontSize: 14,
						color: "#fff",
						fontWeight: "bold",
						paddingLeft: 5,
					}}
				>
					Trending
				</span>
			</div>
			<div style={{ width: 3, height: 35, backgroundColor: "#363c47" }}></div>

			<div
				style={{
					flexDirection: "row",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					cursor: "pointer",
				}}
				onClick={() => {
					props.setActiveQueryFilter("tv");
				}}
			>
				<BiMoviePlay
					style={{
						fontSize: 25,
						color: "#fff",
						letterSpacing: 1,
						fontWeight: "bolder",
					}}
				/>
				<span
					style={{
						fontSize: 14,
						color: "#fff",
						fontWeight: "bold",
						paddingLeft: 10,
					}}
				>
					Movies
				</span>
			</div>
			<div style={{ width: 3, height: 35, backgroundColor: "#363c47" }}></div>
			<div
				style={{
					flexDirection: "row",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					cursor: "pointer",
				}}
				onClick={() => {
					props.setActiveQueryFilter("trending");
				}}
			>
				<BiTv
					style={{
						fontSize: 25,
						color: "#fff",
						letterSpacing: 1,
						fontWeight: "bolder",
					}}
				/>
				<span
					style={{
						fontSize: 14,
						color: "#fff",
						fontWeight: "bold",
						paddingLeft: 10,
					}}
				>
					Tv Series
				</span>
			</div>
		</div>
	);
}
