import React from 'react';

const Sidebar = (props) => {
  let list = props.data.map((point, index) => point.children!= null?<li key={index} className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">{point.name}<span className="caret"></span></a><Sidebar data={point.children} clickHandler={props.clickHandler} addClass={"dropdown-menu"}/></li>:<li key={index} onClick={() => props.clickHandler(index)}><a href="#"><i className="fa fa-file fa-fw" aria-hidden="true"></i><span> {point.name}</span></a></li>);
  return (<ul className={props.addClass || ''}>{list}</ul>);
}

export default Sidebar;
