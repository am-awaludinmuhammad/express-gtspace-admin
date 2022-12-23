import {routes} from '/javascripts/url.js';

const brandModal = $('#brandModal');
const inputBrandName = $('input[name=name]');
const brandForm = $('#brandForm');

$(document).ready(function() {
  $('.data-table').DataTable();

  $('.edit-brand').click(function() {
    $(this).addClass('edit-item-clicked')
  });

  brandModal.on('show.bs.modal', function (e) {
    const isEdit = $('.edit-item-clicked');
    if (isEdit.length) {
      const row = isEdit.closest('tr');
      const data = row.data('brand');
      const urlUpdate = routes.brands.update;

      brandModal.find('.modal-title').html('Edit Brand');
      brandForm.attr('action', urlUpdate.replace(':id', data.id));

      inputBrandName.val(data.name);
    } else {
      // reset form
      brandForm.attr('action', routes.brands.index);
      inputBrandName.val('');
      brandModal.find('.modal-title').html('Add Brand');
    }
  });

  brandModal.on('hide.bs.modal', function (e) {
    $('.edit-item-clicked').removeClass('edit-item-clicked')
  });
});