class List {

	constructor(title) {
		this.title = title;
	}

	render() {
		return `
		<div>
			<h2>${this.title}
				<button data-title="doughnuts" class="delete-list">
					X 
				</button>
			</h2>
			<ul>
			</ul>
		</div>
			`;
	}

}