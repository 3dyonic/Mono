function Container(props) {
    return (
        <div style={{height: '400px'}} className="container border border-danger">
          {props.children}
        </div>
    );
}

export default Container
