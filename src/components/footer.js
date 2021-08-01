import React from 'react'

export default function footer() {
    let footer = {
        position: "absolute",
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-around"
    };
    let icons = {
        border: "2px white solid"

    }
    return (

        <div style = {footer}>                        
            <footer className="page-footer font-small cyan darken-3">           
                <div className="container">             
                <div className="row">
                <div className="col-md-12 py-5">
                    <div className="mb-5 flex-center">

                    <a className="fb-ic" href="http://localhost:3000/">
                        <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x" style={icons}>facebook</i>
                    </a>
                    <a className="tw-ic"  href="http://localhost:3000/">
                        <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x" style={icons}>twitter </i>
                    </a>
                    <a className="gplus-ic" href="http://localhost:3000/">
                        <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x" style={icons}> google</i>
                    </a>
                    <a className="li-ic" href="http://localhost:3000/">
                        <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x" style={icons}> linkedin </i>
                    </a>
                    <a className="ins-ic" href="http://localhost:3000/">
                        <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x" style={icons}>  instagram</i>
                    </a>
                    <a className="pin-ic" href="http://localhost:3000/">
                        <i className="fab fa-pinterest fa-lg white-text fa-2x" style={icons}> pinterest</i>
                    </a>
                    </div>
                </div>

                </div>

            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="http://localhost:3000/"> MyTodosList.com</a>
            </div>

            </footer>
        </div>
    )
}
