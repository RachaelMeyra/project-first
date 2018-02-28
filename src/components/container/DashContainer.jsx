import React, { Component } from 'react'

class SettingsContainer extends Component {
  render() {
    return (
      <div>test</div>
    )
  }
}

export default SettingsContainer;

// import Create from '../create'
// import HeaderBar from '../header'
// import List from '../list'
// import { data } from '../mock'

// export default class SettingsContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       toggle: false,
//       settingsVisible: false,
//       expand: false
//     }
//     this.handleOutsideClick = this.handleOutsideClick.bind(this);
//   }
  
//   onPressClose() {
//     this.setState({ toggle: !this.state.toggle });
//   }
  
//   handleToggle() {
//     this.setState({ expand: !this.state.expand });
//   }
  
//   onPressSettings() {
//     if (!this.state.settingsVisible) {
//       document.addEventListener('click', this.handleOutsideClick, false);
//     } else {
//       document.removeEventListener('click', this.handleOutsideClick, false);
//     }
    
//     this.setState(prevState => ({
//        settingsVisible: !prevState.settingsVisible
//     }))
//   }
                  
//   handleOutsideClick(e) {
//     console.log('it works', e.target);
//     // ignore clicks on the component itself
//     if (this.node.contains(e.target)) {
//       return;
//     }
//     this.onPressSettings();
//   }
  
//   renderToggle() {
//     const { settingsVisible } = this.state;
//     return (
//        <div className={ settingsVisible ? 'edit-settings -active' : 'edit-settings'}>
//         <div className="edit-settings__container">
//           <h4 className="edit-settings__info">Show sidebar at full screen</h4>
//           <label className="switch-light switch-holo">
//           <input 
//             type="checkbox" 
//             defaultChecked={this.state.expand}
//             ref="complete"
//             onChange={this.handleToggle.bind(this)}/>
//           <span className="toggle-pos">
//             <span>Off</span>
//             <span>On</span>
//             <a></a>
//           </span>
//         </label>
//        </div>
//       </div>
//     );
//   }
  
//   renderNav() {
//     const { toggle, expand } = this.state;
//     return (
//       <div className={ expand ? 'section-nav__container -expand' : 'section-nav__container'}>
//       <div className={ toggle ? 'section-nav -active' : 'section-nav'}>
//         <div className="settings">
//           <span className="nav-close" onClick={this.onPressClose.bind(this)}>
//             <i className="fa fa-times" aria-hidden="true"></i>
//           </span>
          
//           <div ref={node => { this.node = node; }}>
//             {this.renderToggle()}
//           </div>
          
//           <span className="nav-settings" onClick={this.onPressSettings.bind(this)}>
//             <i className="fa fa-cog" aria-hidden="true"></i>
//           </span>
         
//         </div>
//         <div className="nav">
//           <Create expand={this.state.expand}/>
//         </div>
//       </div>
//       </div>
//     )
//   }
  
//   render() {
//     return (
//       <div>
//         <div className="container">
//         <HeaderBar
//           title={'React Scroll Create List'} 
//           subtitle={'Created by Philip Hultgren'}
//           onToggle={this.state.toggle}
//           onPress={this.onPressClose.bind(this)} />
        
//           {this.renderNav()}
          
//           <div className="row" style={{marginTop: '70px'}}>
//             <div className="col-md-10">
//               <List data={data} />
//             </div>
//           </div>
          
//         </div>
//       </div>
//     );
//   }
// }

