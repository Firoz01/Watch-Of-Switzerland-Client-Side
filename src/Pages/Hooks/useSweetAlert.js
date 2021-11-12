import swal from "sweetalert";


const useSweetAlert = () => {

    const createAccount = () => {
        swal({
            title: "Account created!",
            text: "You can now go anywhere",
            icon: "success",
            button: "OK",
        });
    };


    const sucessfullyLogin = () => {
        swal({
            title: "Successfully Login",
            text: "You have successfully logged in",
            icon: "success",
            button: "Ok",
        });
    }

    const sucessfullyLogout = () => {
        swal({
          title: "Logout",
          text: "You have successfully logged out",
          icon: "success",
          button: "Ok",
        });
    }

    const loginError = () => {
        swal({
            title: "Login Error",
            text: "You have entered an invalid username or password",
            icon: "error",
            button: "Ok",
        });
    }

    const confirmations = () => {
        swal({
          title: "Confirmed",
          text: "Submitted Order Successfully!",
          icon: "success",
          button: "Okay",
        });
    }

   
    const reviewSent = () => {
        swal({
            title: "Sent",
            text: "Your review Sent! Thank you",
            icon: "success",
            button: "Okay",
        });
    }



    return {
        createAccount,
        sucessfullyLogin,
        loginError,
      sucessfullyLogout,
        confirmations,
      reviewSent
    };
}

export default useSweetAlert;