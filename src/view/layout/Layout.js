import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import Navbar from '../component/Navbar'
import '../../global/style.scss'

function mapStateToProps(state) {
    return {
        
    };
}

class Layout extends Component {
    
    render() {
        return (
            <div>
                <Helmet>
                  <meta charSet="utf-8" />
                  <title>{this.props.title}</title>
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Helmet>
                <div className="area"></div>
                <Navbar/>
                <div style={ {width: '100%'} }>
                  <div style={ {paddingLeft: '60px'} }>{this.props.children}</div>
                </div>
                {/* Footer */}
            </div>
            );
        }
    }
    
    export default connect(
        mapStateToProps,
        )(Layout);