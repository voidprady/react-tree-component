import React from 'react';

const Sidebar = (props) => {
  let list = props.data.map((point, index) => point.children!= null?<li key={index}><a data-toggle="collapse" href="#" type="button" data-target={'#'+point.name.split(' ').join('-')}>{point.name}<span className="caret"></span></a><Sidebar data={point.children} clickHandler={props.clickHandler} addId={point.name.split(' ').join('-')} addClass="collapse"/></li>:<li key={index} onClick={() => props.clickHandler(point.content)}><a href="#"><i className="fa fa-file fa-fw" aria-hidden="true"></i><span> {point.name}</span></a></li>);
  return (<ul id={props.addId || ''} className={props.addClass || ''}>{list}</ul>);
}

export default Sidebar;
