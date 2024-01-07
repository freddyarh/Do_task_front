
import Swal from 'sweetalert2';

export const EntryModal = async() => {

  return Swal.fire({
      title: 'What is your new entry?',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Save',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {

      if (result.isConfirmed) {
        Swal.fire({
          title: `Entry Success`,
          imageUrl: result.value.avatar_url
        })
        return result;
      }
    })
}
