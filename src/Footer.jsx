import React from "react";

function FooterComp(){
    return(
        <footer style={styles.footer}>
        <p>&copy;2024 Race-001 Kölcsönző. All rights reserved.</p>
      </footer>
    );
};

const styles = {
    footer: {
      backgroundColor: "#333",
      color: "white",
      textAlign: "center",
      padding: "15px 0",
      position: "fixed",
      width: "100%",
      bottom: "0",

    },
}
export default FooterComp;