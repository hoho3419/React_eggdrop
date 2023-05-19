import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../styles.css";
import MyButton from "../util/MyButton";
import styles from "./ItemInfo.module.css"
import { useDispatch,useSelector } from 'react-redux'
import { cartAction } from "../../store/cart-slice";

const ItemInfo = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userCart = useSelector(state => state.cart.cartItems);
	const [heartImgState, setHeartImgState] = useState(process.env.PUBLIC_URL + "/assets/EGGDROP/empty_heart.png")
	const cartChk = userCart.filter(el => el.item_no === props.id);
	
	useEffect(() => {
		if (cartChk.length) {
			setHeartImgState(process.env.PUBLIC_URL + "/assets/EGGDROP/full_heart.png")
		} else {
			setHeartImgState(process.env.PUBLIC_URL + "/assets/EGGDROP/empty_heart.png")
		}
	}, [cartChk])

	function addToCartHandler() {
		dispatch(cartAction.addToCart({
			item_no: props.id,
			src: props.src,
			title_img: props.title_img,
			price: props.price,
			title: props.title,
			opt_color: props.color
		}))
	}

	return (
		<div className={styles["item_info"]} >
			<div className={styles["bg_box"]} style={{ background: props.color }}>
				<h2>{props.desc}</h2>
				<h4>{props.title}</h4>
				<img 
					onClick={() => addToCartHandler()} 
					className={styles["heart"]} 
					src={heartImgState}
					alt="찜하기 이미지" 
				/>
				<Swiper
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Pagination]}
					className={styles["mySwiper"]}
				>
					{props.src.map((el, idx) => (
						<SwiperSlide style={{ background: props.color }} key={idx}>
							<img className={styles["deal_img"]} style={{ background: props.color }} src={el} alt="아이템 이미지" />
						</SwiperSlide>
					))}
				</Swiper>
				<img className={styles["deal_cir_img"]} src={props.cir_img} alt="아이템 이미지" />
				<div className={styles["price"]}>{(+props.price).toLocaleString()}원</div>
				<div onClick={() => navigate(`/deal/${props.nextId}`)} className={[styles.next_item, props.nextText ? "" : styles.dis_none].join(" ")}>
					<span>{props.nextText}</span>
					<img src={process.env.PUBLIC_URL + '/assets/EGGDROP/right-arrow.png'} alt="다음 아이템 버튼" />
				</div>
				<div onClick={() => navigate(`/deal/${props.PrevId}`)} className={[styles.prev_item, props.PrevText ? "" : styles.dis_none].join(" ")}>
					<span>{props.PrevText}</span>
					<img src={process.env.PUBLIC_URL + '/assets/EGGDROP/left-arrow.png'} alt="다음 아이템 버튼" />
				</div>
			</div>
			<div className={styles["btn_box"]}>
				<MyButton onClick={() => navigate('/menu')} className={styles["go_list"]} text="목록으로" >
					<div />
				</MyButton>
			</div>
		</div>
	);
};

export default ItemInfo;
