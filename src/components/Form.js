import CustomSelect from "./CustomSelect";
import Tabs from "./Tabs";

function Form() {
	return (
		<form className="container view-form">
			<section className="my-5">
				<div className="headline-3 mb-1">city</div>
				<div className="text-gray-base subtitle-1">sub title</div>
			</section>
			<CustomSelect/>
			<hr className="hr hr--lg"/>
			<div className="headline-3 mb-2">shipping method</div>
			<Tabs className="mb-4"/>
			<div className="mb-4">label components free shipping</div>
			<div>label components express shipping</div>
			<div className="my-5 button-wrapper d-flex justify-content-lg-start">
				<button className="btn btn--secondary mr-2">cancel</button>
				<button className="btn btn--primary">save</button>
			</div>
		</form>
	);
}

export default Form;
