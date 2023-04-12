import Swal from 'sweetalert2';
export function showSuccessAlert(message?: string, link?: string) {
    Swal.fire({
        title: 'Success',
        text:  message || "The operation is a success",
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
        color: 'rgb(240, 248, 255)',
        background: 'rgb(39, 39, 39)'
      }
      ).then(() => {
        window.location.reload();
      })
}

export function showErrorAlert(message?: string) {
    Swal.fire({
        title: 'Failure',
        text: message || "The operation is a failure",
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
        color: 'rgb(240, 248, 255)',
        background: 'rgb(39, 39, 39)'
      }
      )
}
