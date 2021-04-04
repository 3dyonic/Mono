function Tabs( props ) {
	return (
		<div className={ `tabs ${ props.className }` }>
			<button className="tab tab--active">tab delivery</button>
			<button className="tab">tab pickup</button>
		</div>
	);
}

export default Tabs;



