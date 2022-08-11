// API
const xhr = new XMLHttpRequest();
const url = `https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;

xhr.open("GET", url);

xhr.onreadystatechange = function () {
	if (xhr.status === 200 && xhr.readyState === 4) {
		const response = JSON.parse(xhr.responseText);
		// console.log(response);

		let template = "";

		for (let i = 0; i < response.length; i++) {
			template += `
			<div class="col-lg-4 mb-5">
				<div class="card m-5" style="width: 18rem">
					<img src="${response[i].thumbnailUrl}" loading="lazy" class="card-img-top py-3 px-2" alt="..." />
					<div class="card-body">
						<h5 class="card-title" style="max-height:50px; overflow-y:hidden; text-overflow: ellipsis;"> ${response[i].id}. ${response[i].title} </h5>
						<a href="#"  class="btn btn-primary" onclick="showM('${response[i].url}')">See Full Photo</a>
					</div>
				</div>	
			</div>	
				`;

			// console.log(response[i]);
		}
		document.querySelector("#my-container").innerHTML = template;
	}
};
xhr.send();

// Modal scripting
const modal = document.querySelector("#modal");
function showM(BigUrl) {
	modal.style.display = "block";
	modal.innerHTML = `<img src=${BigUrl} alt="Err... Sorry, Couldn't Load" class="container p-3 bg-light" style="border:2px solid black">`;
}

addEventListener("keydown", (e) => {
	if (e.key == "Escape") {
		modal.style.display = "none";
	}
});
