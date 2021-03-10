import { useSnackbar } from 'react-simple-snackbar';

// const successOptions = {
//   position: 'bottom-right',
//   style: {
//     backgroundColor: 'midnightblue',
//     border: '2px solid lightgreen',
//     color: 'lightblue',
//     fontFamily: 'Menlo, monospace',
//     fontSize: '20px',
//     textAlign: 'center',
//   },
//   closeStyle: {
//     color: 'lightcoral',
//     fontSize: '16px',
//   },
// };
// const errorOptions = {
//   position: 'bottom-right',
//   style: {
//     backgroundColor: 'midnightblue',
//     border: '2px solid lightgreen',
//     color: 'lightblue',
//     fontFamily: 'Menlo, monospace',
//     fontSize: '20px',
//     textAlign: 'center',
//   },
//   closeStyle: {
//     color: 'lightcoral',
//     fontSize: '16px',
//   },
// };

export default (variant: 'success' | 'error' = 'success') => {
  switch (variant) {
    case 'success':
      return useSnackbar();
    case 'error':
      return useSnackbar();
    default:
      return useSnackbar();
  }
};
