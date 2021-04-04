import { ReactComponent as DropDownImage } from '../assets/dropdownShape.svg';

function CustomSelect( props ) {
	return (
		<div className={ `custom-select ${ props.className }` }>
			<div className="custom-select__option">Address / Pickup city</div>
			<div className="custom-select__label">Yerevan</div>
			<button className="custom-select__button">
				<DropDownImage width="12px" height="6"></DropDownImage>
			</button>
		</div>
	);
}

export default CustomSelect;
