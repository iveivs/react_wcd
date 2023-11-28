function ListItem(props) {
	return (
		<li className="todo-item">
			<span className="todo-item-text">{props.task.title}</span>
			<div className="btn-group">
				<button className="btn btn-outline-dark btn-sm">
					Важное
				</button>
				<button className="btn btn-outline-danger btn-sm">
					Удалить
				</button>
			</div>
		</li>
	);
}

export default ListItem;
