import Swal from 'sweetalert2';

export const appSwal = Swal.mixin({
  background: 'var(--mat-sys-surface-container)',
  color: 'var(--mat-sys-on-surface)',
  buttonsStyling: false,
  reverseButtons: true,
  customClass: {
    popup: 'swal-app',
    title: 'swal-app__title',
    htmlContainer: 'swal-app__text',
    actions: 'swal-app__actions',
    confirmButton: 'swal-app__btn swal-app__btn--primary',
    denyButton: 'swal-app__btn swal-app__btn--ghost',
    cancelButton: 'swal-app__btn swal-app__btn--ghost',
  },
});
