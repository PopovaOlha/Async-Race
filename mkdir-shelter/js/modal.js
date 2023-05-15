function _createModal(options) {
const modal = document.createElement('div');
modal.classList.add('wrapper_pets');
modal.insertAdjacentHTML('afterbegin', ` 
<div class="modal_body">
 <button class="modal_button"><span>✖</span></button>
    <div class="modal_content">
        <div class="popup_picture">
         <img src="./pictures/pets-jennifer.jpg" alt="pets" class="modal_img">
            </div>
                <div class="modal_info">
                    <h4 class="modal_name">Jannifer</h4>
                    <h3 class="modal_breed">Dog - Labrador</h3>
                    <p class="modal_description">Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.</p>
                    <ul class="description_list">
                        <li class="modal-info"><span class="bold">Age:</span> 2 months</li>
                        <li class="modal-info"><span class="bold">Inoculations:</span> none</li>
                        <li class="modal-info"><span class="bold">Diseases:</span></li>
                        <li class="modal-info"><span class="bold">Parasites:</span> none</li>
                        </ul>
                    </div>
                </div>
            </div>
          `)
          document.body.appendChild(modal);
          return modal;
}

$.modal = function(options) {
const $modal = _createModal(options);

return {
    open() {},
    close() {},
    destroy() {}
}
}