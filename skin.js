// Garden Gnome Software - Skin
// Pano2VR 7.1.8/20986
// Filename: 
// Generated 2025-07-05T12:01:31

function pano2vrSkin(player,base) {
	player.addVariable('vis_thumbnails', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_nodes', 2, false, { ignoreInState: 0  });
	player.addVariable('has_categories', 2, true, { ignoreInState: 0  });
	player.addVariable('categories_cloner_hasUp', 2, true, { ignoreInState: 0  });
	player.addVariable('categories_cloner_hasDown', 2, true, { ignoreInState: 0  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_3d_preview', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('VIS_Floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('VIS_Levels', 1, 0, { ignoreInState: 0  });
	player.addVariable('Vis_map_Button', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map1', 2, false, { ignoreInState: 0  });
	player.addVariable('tt_active', 2, false, { ignoreInState: 0  });
	player.addVariable('Map_Pin_Enlarge', 2, false, { ignoreInState: 0  });
	player.addVariable('Map_Pin_active_E', 2, false, { ignoreInState: 0  });
	player.addVariable('SlideShow_QG', 1, 0, { ignoreInState: 0  });
	player.addVariable('Floor_Visibility', 2, false, { ignoreInState: 0  });
	player.addVariable('Icon_Visibility', 2, true, { ignoreInState: 0  });
	player.addVariable('Room_visibility_1F', 2, false, { ignoreInState: 0  });
	player.addVariable('Room_visibility_2F', 2, false, { ignoreInState: 0  });
	player.addVariable('Room_visibility_3F', 2, false, { ignoreInState: 0  });
	player.addVariable('Room_P_height', 1, 10.00, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._main_main=document.createElement('div');
		el.ggId="Main main";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._main_main.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._main_main.ggUpdatePosition=function (useTransition) {
		}
		el=me._rooms_button=document.createElement('div');
		els=me._rooms_button__img=document.createElement('img');
		els.className='ggskin ggskin_rooms_button';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABs0lEQVRoge2ZT06EMBSHP4xHcC/ewBtYb+ANxDXeQb2BC10PHsL1YNx4BHewNt7huaCEDgLT8q8h6Zc0dIb29f3SR1t4kYiwZU58OzCVzQs4XWkcpa+lLvMhIkuVWER28p9CRPYikug2k8aJFnqIY6CwbFvq8gbkOM7QFAGKytHzjnuJvleT6d9x6/8ucuAOWyEjpk3pELBFdfR/0DYKh36dZUxcu/BpYdMUZFKIxTPiGkJ7mhWlDo32VCujzSPw5GBfATuaMLumCqleXJbRmMPl8OKII2PIdUmMMQdx2chujXrm0M+V0qh3LRAHbH4nDgJ8EwT4JgjwTRDgmyDAkRS4n9PgWu/EUDn/Yoz7PIfRzYfQmjPwqq8RzUxMZk0B0IiYjc2HUBDgmyDAN0'+
			'GAb4IA3wQBvmmfhVLgrKet6qkPtRtDfMTWL+aZyvhUnTp+Orfh3fLzeiJVOqqwtJvW/dc+jUKT2bky6qMxBdTT0hdCGIOVA20ugRtd/2Gcw1/Ad884ByG0RJJPUSVCXMiAD1ZO8g3RzuS0yRjpcJulBECVKlK6njOTw22WFLAKm9/INi/gD+Yl1aRrmmjcAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAELklEQVRogdWaz6tVVRTHP/u989TSIDTBJ8J9OVByEuIg/4HANwoCZ9WkSYMwEAwiB2bTCBL8Cxr4H6gDw4lOI4iUaOBUowwiUN67x93g7H1de9219jnPnve8vrDY5+x7zt3f71pr/zhnnxBjbIAALIlS2nLFlkSpLSTTiMmeiTJbK8psU6N+dk8mn61GvFFlnwgpIAjiOOQlQev+qeWMIQIaYcvqWAvJ98mISs/nUgvIxJeF14MyUr10RJE+MoUs8ivqvC8SsuH3Uvkb8DN173vkC+JWBLz0yeSz5XMvnbKdAD4FDlGiBZ4Cd4FbSVDLvHCPfCEgxBhfUR7UXl8BdiWTIrwoLAFvAZcYhizoDnAT+IkuClNgU5msb4FpiDG+ip8ykvwucb4CvA+sAa'+
			'vKWwDH0/9lPAL2AXtUvYV/gC+BHxX5DUE+C5mGGOM+Q4BFfncqzwIfAHt7iGR8D9wQ5+vAKWDSI+gqcC0R15GYiQgxxteY97709m5hJ4FvBhIHeAJ83HPNmSRojdIpLfAZXSQ2DCFTYDp0HsjCvlKNPwL+VHUTQeRBr8Qu72/QjURngI9Euyfo+kTmIzv7EhD0MGrNwrmjvi2ItcCHDqGLqeGtIHO4nkSspvo3a+SBYA1bOgL5WBL+dYsEh4pYBh6LusPMD88F15oALcRa17wMEfq8xq+IgJ6NdTQWActJ3hprlkLoSuxILCICmYs+d81LIUvIGKiSRwiQN9RuHANVHjqF9A21B5NFwWrfjICndGwBGWYUZAS8G3Y0dOf0wrUTEcDP8f+LiCICiyB5jm6FuV0IOgIvc/g8B5wG3gHOb4Wk4uB2YmtSG3sOkDBHR/08'+
			'4Nl2zMRXRMPfbeG+KreG0vPec8F2ReBK/yUF+pY5sz7gEZe/jwVrJVosp4fYmPAcPLcarUVjLPQOLlaqWILGhO4DhaBaB5YixoTbgWHYA81OEeCmUF+ejYlglG4EPM+PLSLDWmCaDzT6eKdhbi1UIx4o38svGrrtOaf2pc2Y5DOsnZkZGnX+NbAfe16YiOsmdO9ALUyc+qE4II7XgMuUO5uPgS/yBSHGeIzuNfq3wLv/sXGNv4FPeq5ZB47QvRB+g2FvAW8BF4CNhufqFpUuL0LYwmyfOIfmAl3K7McfWg+kUu8JSBwGXk/HT16Q8FPgL+APSgfH1PbnWUCIMR6l3FZqKqXc9PCG2XX8vQMPD4FfgNup1Dv10jZFudmki6yZV3acvI+rdyOtKF2n2wCs7aFJwveY3zduqYvI1oYY4xH8nXh9nF+1u6+7hV0FDibCvy'+
			'fCPwD3E0ntpFxa30tIEYWgEGNcpUwP6zMCa0d+yBpKToR6PNfW99GH/vhjCrQ5hVB/rP/M2onve4uh01GXNQE6lVwxDc/DSSKp895KG2sRiDrWnbxPRO0LFi8qz/4F2oZcw/wwSGEAAAAASUVORK5CYII=';
		me._rooms_button__img.ggOverSrc=hs;
		el.ggId="Rooms Button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: -1;';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : 318px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rooms_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rooms_button.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Icon_Visibility') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Icon_Visibility') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rooms_button.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rooms_button.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rooms_button.style.transition='opacity 500ms ease 0ms, border-radius 0s';
				if (me._rooms_button.ggCurrentLogicStateAlpha == 0) {
					me._rooms_button.style.visibility=me._rooms_button.ggVisible?'inherit':'hidden';
					me._rooms_button.style.opacity=1;
				}
				else if (me._rooms_button.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._rooms_button.style.opacity == 0.0) { me._rooms_button.style.visibility="hidden"; } }, 505);
					me._rooms_button.style.opacity=0;
				}
				else {
					me._rooms_button.style.visibility=me._rooms_button.ggVisible?'inherit':'hidden';
					me._rooms_button.style.opacity=1;
				}
			}
		}
		me._rooms_button.logicBlock_alpha();
		me._rooms_button.logicBlock_imageborderradius = function() {
			var newLogicStateImageBorderRadius;
			if (
				((me.elementMouseOver['rooms_button'] == true))
			)
			{
				newLogicStateImageBorderRadius = 0;
			}
			else {
				newLogicStateImageBorderRadius = -1;
			}
			if (me._rooms_button.ggCurrentLogicStateImageBorderRadius != newLogicStateImageBorderRadius) {
				me._rooms_button.ggCurrentLogicStateImageBorderRadius = newLogicStateImageBorderRadius;
				me._rooms_button.ggSubElement.style.transition='opacity 500ms ease 0ms, border-radius 0s';
				if (me._rooms_button.ggCurrentLogicStateImageBorderRadius == 0) {
					me._rooms_button.ggSubElement.style.borderRadius="10px";
				}
				else {
					me._rooms_button.ggSubElement.style.borderRadius="0px";
				}
			}
		}
		me._rooms_button.logicBlock_imageborderradius();
		me._rooms_button.onmouseenter=function (e) {
			me._rooms_button__img.src=me._rooms_button__img.ggOverSrc;
			me.elementMouseOver['rooms_button']=true;
			me._rooms_button.logicBlock_imageborderradius();
		}
		me._rooms_button.onmouseleave=function (e) {
			me._rooms_button__img.src=me._rooms_button__img.ggNormalSrc;
			me.elementMouseOver['rooms_button']=false;
			me._rooms_button.logicBlock_imageborderradius();
		}
		me._rooms_button.ggUpdatePosition=function (useTransition) {
		}
		me._main_main.appendChild(me._rooms_button);
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_fullscreen';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABFklEQVRoge2ZYQ6DIAyFn8sO4m7CbuJNlp1Eb8JuAjfpfqz8o4jDWDH9ksZEQvueVkxgICL0zE1bQCtmQJvLG3AAPAAqRGioX8odeNwVMxCRFBPV4Qs51mKurPGSckiJHU8MbORfgS0xcu3AWtwWA3Np0sGRHqbPjUvfQOq72NDfexH5OuYGB8r/idPNYX89fyHqufwyenrMgDbdG7gL9xcIy5YSCzYuo93QfQuZAW3MgDZmQBszoI0Z0MYMaCMZ8GjbcdsbUY/tSmhjBrQxA9pIBuKRIlpYM+COkVFk4uuSHT35AUfSsfmAA/Q71qkhNIj0lTXEh1j6iN8AHgA+K684buuI6rmRaz8htQ9sZ04fM6BN9wa+a0E4OTsvi90AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFfklEQVRogcWau64jRRCGP9tzfHZXXDbkDUhA2ndAkCCBRMhGKyKEdvcJyHgBICBabYBESEbIC7ABAYSQIJETIA4+vgzBdB3//bvaMxgfUVJrbE9311+X7uqu8qzv+zngbWFtDsxKA+hL2yZtJ60v/WcT5p9L35h/NzL/rrOJuzJhJ00Z6OQx2aa0EC4E1O8zaQG6xSMoQG6Fx0a+Qxms4KNdSFMtBTjVjFtFmwugFlA+KoQraQusZey6zLlRART40p46OcnEKsCu9NuRW0CVpTwyRan24901NW1CgNDIErgsbVmaCqCaUfDBbCHgQ5MhgPt/KE35BB5V1KYAX3DoprtOJgxNLIE75fkQeAS8RJu2wOvU60SbklviBfDKkXmvgOfANxy68A7YuT+GBZ'+
			'bAp8DjEfAAf8nnvvG5RX8cebcovB8DXwmuat34rhNCPATeZdDC98AX7KVeM5j0GliVptumLmB1IX0XLvc2g7XVbS8YtP0m8FZpD4APga/Z70RbYJP5ZAd8UBg/Az4XgJsigAqxtklVEMiB69Z4bXOtS7+fCu9nZZ5H1NvuIiwQQqgwr5VBvwjjDLwL4UHMmypC14ivmxn7Bf1r6XNXgZd38456YWmwAfiZessM8OE6YxZwK4QFfIE7hqCuWAL2u9Bcn51MkFFm6hWH2vdQnwWzEGBW+sHhQnccPcOacLqxXCcdlUlQuE0AXVnLXMfPQTrvvIDvOXQ1F8AVQDJ330lHXVxBAdK1/3d5huv05H7vFBZQAdRqCtyFQ/jFWDpq3wyNB/liVfdR7Wdbp37WbVQXblgF+U3HtgS4EaIz8HoWIQEcTU+G6nIuwJTf9J0u4kwA'+
			'3zR2nYDX88tvwH1qF1r7YA59fQplfh3W8GN5vFc84SUbYDvr+/5V6iAWgQKZVLUe3913T6XYEvVIMxlPWADqxZMdaXWrbC3SU8njxGQ8IYB21mOr3ryyHeOcpAJMxuMC+GWkOrpSL6xzWcG3z3+FR7dRjZS6kBz4bVsgQE/C01mn7BKSaf22BAiAk/F01Cb0QdmR2BmeC3zGcxSPR8HWoe7/oEl49Djt0mr4V/LjwTmolUMaxROXhuxOALXr6MLCJzqTEI5hFI9n5jSzgHTUcA+3sxN5+nESHr1S6rUypNbgFREyJvKF9V+AZ5m7SXg0K6HPLHT7Xnxu8jPRJDxZWqWzAX5S1Qh5zkXsedNJeFQATei+AO4Bb8hgaEfHcwiQnUojT/RDA89BajHylC+XDpcGNDsbTbnQOFilVsZ6ySGepfDoKYc5T25pFiAEyITIro'+
			'tO2scFUK17ZlBTnEsZu2S/Dm7yQpkGdIAHE6VIkbQu9WMB6lhmXFONQSHoRgXItq9MgMzv57TTKk6elIrdJZR2aU0TuSpAVTHq5KVqJegiAe9aDSE0TsChm7VqZJoV16ZZaMd4g0FPoxmFhpzU5zPrHHOfVoFDhfDSU4uqC43uLFFtCWuoEK07wbE7QxZpfdGqy+j+f3QXnMsXvbRflQHvCePWFqe1tFaVxgXI6nFZqWkGPClYfjeMWxgqNPpDpE2el0EfAU8TrSlTNXVWUw4LZDWylgWiwPE+8E6Z41vq1M6Wkhe6z9737jDk4e8ylHUeME5RI/MsnmbtwvcDYPD7kXaNTOk74DMGz7hiyM2ugFVYwIsXK+Bj4BPgz5HJb6tGti28vyzgs7zsdtb3/T0OI+BYmTWrGWjBwy0Q7uPup7zGyqzKJ1Kea03ualZaB7cK'+
			'3SrEqTUyrcx7ctkz5tfyrJK7cURVUkZjfzXQpO+pNbId9QagSS7l4TnaGwEQIZSRxoPqGJto89QaWQBt8dA/eOjnqj4QpFr0moEzzeLHKTWyyMZpvMhcripsRPsHkwJYRwA2aZMAAAAASUVORK5CYII=';
		me._fullscreen__img.ggOverSrc=hs;
		el.ggId="Fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: -1;';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : 72px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Icon_Visibility') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Icon_Visibility') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen.style.transition='opacity 500ms ease 0ms, border-radius 0s';
				if (me._fullscreen.ggCurrentLogicStateAlpha == 0) {
					me._fullscreen.style.visibility=me._fullscreen.ggVisible?'inherit':'hidden';
					me._fullscreen.style.opacity=1;
				}
				else if (me._fullscreen.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._fullscreen.style.opacity == 0.0) { me._fullscreen.style.visibility="hidden"; } }, 505);
					me._fullscreen.style.opacity=0;
				}
				else {
					me._fullscreen.style.visibility=me._fullscreen.ggVisible?'inherit':'hidden';
					me._fullscreen.style.opacity=1;
				}
			}
		}
		me._fullscreen.logicBlock_alpha();
		me._fullscreen.logicBlock_imageborderradius = function() {
			var newLogicStateImageBorderRadius;
			if (
				((me.elementMouseOver['fullscreen'] == true))
			)
			{
				newLogicStateImageBorderRadius = 0;
			}
			else {
				newLogicStateImageBorderRadius = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateImageBorderRadius != newLogicStateImageBorderRadius) {
				me._fullscreen.ggCurrentLogicStateImageBorderRadius = newLogicStateImageBorderRadius;
				me._fullscreen.ggSubElement.style.transition='opacity 500ms ease 0ms, border-radius 0s';
				if (me._fullscreen.ggCurrentLogicStateImageBorderRadius == 0) {
					me._fullscreen.ggSubElement.style.borderRadius="10px";
				}
				else {
					me._fullscreen.ggSubElement.style.borderRadius="0px";
				}
			}
		}
		me._fullscreen.logicBlock_imageborderradius();
		me._fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen.onmouseenter=function (e) {
			me._fullscreen__img.src=me._fullscreen__img.ggOverSrc;
			me.elementMouseOver['fullscreen']=true;
			me._fullscreen.logicBlock_imageborderradius();
		}
		me._fullscreen.onmouseleave=function (e) {
			me._fullscreen__img.src=me._fullscreen__img.ggNormalSrc;
			me.elementMouseOver['fullscreen']=false;
			me._fullscreen.logicBlock_imageborderradius();
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._main_main.appendChild(me._fullscreen);
		el=me._help=document.createElement('div');
		els=me._help__img=document.createElement('img');
		els.className='ggskin ggskin_help';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABb0lEQVRoge2X203DMBRATwAxh/mOkNiAMAllkpZJwibNDMB/wxpIxXzYQQFEc+Ncc1vJR7LqqLavjx0/UnnvOWXOrDuwlCJgTRGwpghYUwSsOSaB85RKxySwB6q5lS4ydGTAjfK9sM7si1mOGVgBLbD7kVq+S+ngvddMW3+Ynfd+rRmzUrxOb4Em5nvgCXiLz7eEmRnYAI8qUZVGYjUa5faPMi7OwDATTiO2lsC4Y4fKOYHorKS9iB8m/u+BLuYbjYBSgan9+S6W6QRtScqIkQpMnZJ9QmyXUOcXUgHNV62Jv51GY9KOae21a5QFpOfAJfC+II4jnMRNfO6BqwXtfSG9C6XOgAPuCQfXQM/0biVGKvCR0HZDOJ3HdIQdS43/WgMbwiuj2nmQr4GKNA'+
			'lH2hYrRvMyZ8IxfZElUQSsyS1QA9c5A+QUqIFX4Bm4yRXk5F+h3NtoTRikl1wByjlgTRGwpghYUwSsKQLWFAFrPgEDef5mmVwxDAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEJ0lEQVRoge2asascVRTGf7sTXwLaKzbphAQLQfAPUBtBe1tTCIIhiNiIImhpr1j4R1jY2FgriEQsJJDCJhDraPKyO7sWew/zzbfnzr6dmfB4kAOXO3tn5s733XvOud+d2cV2u+Ui2/K8AUy1C0/g0nkDABaV9jP59pwEakCm9jdIZCqBxYHabVs5rl0TfVVJjCWgQIeKA4uS/Y62bOSrJMYQcJBLqbUoAQW7KUV/K+CoB0d+LAEHHqWRou1OYAO0Vi/YJ5iRSAkdQyAD35Q+oo7isxCg2lLWchwlwC+NxKCNmQEH/4yVIKQEHPwaWJU6BqUBHtHNStw3SxD76Cv4EysxCw39GdgI8BX7s9SW+1aHQB9DwLNNNvonwGUpMROv0MXBbfoj/5j9GYJuRt'+
			'SOXge8A882Eaw+A0Hg0wL+RemjBe4DXwO/JeA1gLMUXLWFqNEMuBNo6Eb4BLhi5SfguYHntcCfwC3gITufj/qU3cw8pgtyXzfORECJZK6jo67gfxbwLfAX8E/5fQ14Qfq9Ddws4P8TIkFiRZdmBwmECw1Jgizvq0stgM8E/D3gg0JUs9FLwOel7WXgVeBXuqBurE+1ahxkcjoD7OD9AW+XugXeY3/0AO4AX5XjBviE/jriqTeADwaxEqjpGQfuD9jI72/oL1IZiX/L8fP0V+6ahho0z0KZxlmw72rQyYE1cINdcEZ8ZC4X9/4NXC/HtRkdRaCmMJfsgvQ0AR/X/FL60tF28O4eDbkiDTtqITsUxJeEgLqMPszbPShjZb5azj+gr0qHyBwkoJbNhKey7MEb68M10Rb4Eni2XHOXvphzmT2aQGa+akab63od7ZAOS3Zp'+
			'8wsB3wIf0aXQjMSsBLLdVJDQ9nUBH4CuA++zkxZhLfAd/UUrlKlmrtFiTiVslBW5r3oabuhG8V3gY+v7AfBO6S8j4ODPvCNT0F5vk86zgNtY0XO/A98Df9Ap0lMhka0dZ5qB0EJZ7ncFquJKXUjltarSK8Br7NaHJV2crAvoU/oibpQbOYGhko28y2uX1qGH4v5Y+IJA1A7eN/pV0xgYek/jqbS20fbN+1LOx+jrrkzdx11vUhAr8Bp4v9aP9c0D9PfD7jK6sR+1DmTBS3JOQft20MGr3Aj3CdBRRgWuWiana6OZtdc0TNzzOvAm9VcpWdYaLSWGRrZmNaIb4A3g23L+Q+CHCvhRwMOGYgBymevnM02kvh/3OPjaenKULSZ8YlLd4zurKG+xc9Mf2XcfdanRJOYgkL0bjWN1Rx392mwcbXN84FDX8fZIEhqsk0GrTS'+
			'GQKdIY6TivK2qcc7+fRORJzIBviPyaLC2Ptrm+kalc0AXRr5kl86hNJZCt2FB/OeU5fzKRuVxIj12KHLp+ks3tQnNfe9CexIfuWQEesgv/V4OnBM7b/gfvSyAYXHG1tQAAAABJRU5ErkJggg==';
		me._help__img.ggOverSrc=hs;
		el.ggId="Help";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: -1;';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._help.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._help.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Icon_Visibility') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Icon_Visibility') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._help.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._help.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._help.style.transition='opacity 500ms ease 0ms, border-radius 0s';
				if (me._help.ggCurrentLogicStateAlpha == 0) {
					me._help.style.visibility=me._help.ggVisible?'inherit':'hidden';
					me._help.style.opacity=1;
				}
				else if (me._help.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._help.style.opacity == 0.0) { me._help.style.visibility="hidden"; } }, 505);
					me._help.style.opacity=0;
				}
				else {
					me._help.style.visibility=me._help.ggVisible?'inherit':'hidden';
					me._help.style.opacity=1;
				}
			}
		}
		me._help.logicBlock_alpha();
		me._help.logicBlock_imageborderradius = function() {
			var newLogicStateImageBorderRadius;
			if (
				((me.elementMouseOver['help'] == true))
			)
			{
				newLogicStateImageBorderRadius = 0;
			}
			else {
				newLogicStateImageBorderRadius = -1;
			}
			if (me._help.ggCurrentLogicStateImageBorderRadius != newLogicStateImageBorderRadius) {
				me._help.ggCurrentLogicStateImageBorderRadius = newLogicStateImageBorderRadius;
				me._help.ggSubElement.style.transition='opacity 500ms ease 0ms, border-radius 0s';
				if (me._help.ggCurrentLogicStateImageBorderRadius == 0) {
					me._help.ggSubElement.style.borderRadius="10px";
				}
				else {
					me._help.ggSubElement.style.borderRadius="0px";
				}
			}
		}
		me._help.logicBlock_imageborderradius();
		me._help.onclick=function (e) {
			me._quick_guide_bg.ggVisible = !me._quick_guide_bg.ggVisible;
			var flag=me._quick_guide_bg.ggVisible;
			me._quick_guide_bg.style.transition='none';
			me._quick_guide_bg.style.visibility=((flag)&&(Number(me._quick_guide_bg.style.opacity)>0||!me._quick_guide_bg.style.opacity))?'inherit':'hidden';
			me._qg_outside_close_b.style.transition='none';
			me._qg_outside_close_b.style.visibility=(Number(me._qg_outside_close_b.style.opacity)>0||!me._qg_outside_close_b.style.opacity)?'inherit':'hidden';
			me._qg_outside_close_b.ggVisible=true;
			player.setVariableValue('SlideShow_QG', Number("0.00"));
			var flag=me._help.ggScaleActive;
			if (player.transitionsDisabled) {
				me._help.style.transition='none';
			} else {
				me._help.style.transition='all 0ms ease-out 0ms';
			}
			if (flag) {
				me._help.ggParameter.sx=1;me._help.ggParameter.sy=1;
			} else {
				me._help.ggParameter.sx=1.3;me._help.ggParameter.sy=1.3;
			}
			me._help.ggScaleActive=!flag;
				me._help.style.transform=parameterToTransform(me._help.ggParameter);
			setTimeout(function() {skin.updateSize(me._help);}, 50);
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
		}
		me._help.onmouseenter=function (e) {
			me._help__img.src=me._help__img.ggOverSrc;
			me.elementMouseOver['help']=true;
			me._help.logicBlock_imageborderradius();
		}
		me._help.onmouseleave=function (e) {
			me._help__img.src=me._help__img.ggNormalSrc;
			me.elementMouseOver['help']=false;
			me._help.logicBlock_imageborderradius();
		}
		me._help.ggUpdatePosition=function (useTransition) {
		}
		me._main_main.appendChild(me._help);
		el=me._floors_button=document.createElement('div');
		els=me._floors_button__img=document.createElement('img');
		els.className='ggskin ggskin_floors_button';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACC0lEQVRoge2a/W3DIBDFL1X3KKOwSdmEbmJ1EreT4E7y+keDS8jxdYCjSEZCimK4937HOWfJuQCgZx4vjzbQO14nxlZE9E5EP0S0EdHXFBUAI6cCYMEPd702VPMI4ykQNUL7gr6bWNFfmXww17br9OsUc/2LiD6pp7w6Mr4UMhyvNwDWxJ4VgJZ4ad1grwZTxk1FjBxIbYwmgFJ9L5DVc+spNgOUjFuh8RYdD5LUkQbsNZ3TdQndhQOJg+gHGOdADPj75M5HvJnbYA4yzs0UiOYATLBgxaBGM2gq3JbWntTwYW4LPnON59FjY7+NKOPh8NgSUuBLaK+OeINmFnsQe6Bxi3TDvEloitoWQGbcHzldpHSlAR3kHViSsOT+FgGXAdFHG28BCAUN+h/EVC'+
			'FGlXEJQGxiaTRh0f8kWwRQjYFKZbAinW2g/Qfhzl940QSBW2s6B8KB2cb4SX/hAh2JtEKEIG6gcR93DWLtpxAv4kRFtYn/47bCZPikhsb92Msud0wxiBWakEyL9A1/k4zWep4JktMFzk48pxMvUuMtAKGgQX8n1oUYVcYlAL3Zszg78dmJq0HcQOM+7hrE2k8hXsSJimoTZyc+O/HZiWviLlLjLQChoMHZibvghwHU1u+KsZ14OEANCAdmB+lOe9HtZhv3s/c9cW4oItJE9EZE3zTprwYzAQ4ZT/9vlV/aWJlUsKHvCgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAGFklEQVRoge2aXYhVVRTHf2fmqjM2Qg9REwiRWndSRy3Eah6kiB4qegkq6MOgMISKXirSjFSipyDKEMuI6IOQoHqRvsiihwqpCDXHgsCXKNLH+Z657h72Xp511t17nzszaAZt2Oxzzz1nn/9/7fV19jqFcw7VCjXq3hV6t+qN0Beo44b6v0vN60JvATNqnA7jjDov/XToLowyjx5pZIB30RnwBREScp/MKyAEnAZvxxQRIaMl7hoZaQvwBu3ANWh7LERXA/cDfwEngA8NAQGte25VokQK51x3BLgFbYGnwK8B7gMGaW8t4BjwdILEDDBliEyba9uIFM65BVTVJAa6ASzMAB8M0l4dAR4jMgy8AxyuIaLPyTUV9Sqccz0KuAYlgO2xJigSjwFvARPhWJ'+
			'5h//8bOIBXr5RaWTIVWymcc30GdKxb8KuBx4FLE8CPA8+pc1cBNwDXARdE7hkF3gc+CvdbArprUjOFc+7CAHJRpFvwLwQwVpoC/CvgVeIeQ+zsUWAoQaQFHAReoboaU8CkGqVPF865iwPYHqA3jD2KwBrgXmBV5IEAfwIvA0epegxLwLrkTlbxGUNgEq+W42GcLJxzSwPgxar3AOsC8JUJ4L8A7wJHqLo/SwJK6cdiySDejmICEiLvAT8r8GNhHC+cc5cH0H34ZV0PbMpM+Cuwk7huareXIqC9mLazNcDdQJO4wZ8EXgJ+wNvMKDBWOOeuCOD7giQezgB/PvyeDtKYVKMl0TIERPoavNiaVtkmsBHYQLudtPAr/xgwAowUzrkBYEnoX0Zu+AbYZ85PUurhOKV+6kCUIyDgxd607em2OUFkD/AWMKLzlifVBaPAi3ip'+
			'x5pOzk5TDf02ahLmF5USMrGkzbZ9oTeB7ZSqtUxw64TrhLqxJ1x0LltR8/+E+V1AmY1CVdrd+NTgHuIqJImfpM0N4p4npkKxtFsLUrcm8ATtKvSZzN2gVIcjwJvAg4bIjXij0kZsPYqoingbIVRnxHJs3x+2E/dGAF8ErI6QzA0EhkvwnugavDuL+X/xRvvDJGK483Wji/DxIPVc8JnsfuAnggcieKErAwGJA4vDhE3gzgyRk8BufEZpc3h5eckFMklPcpHeum/xeqOBwGjhnFsRgEsXlybLJ0RyAeYA8DHVVLculRgMwFOZrAZOEIyOxCOEQLYcL3WRvhBYaCbNBRh56Nf4VbG5kH7bWwVsy8xhgRPmkXxICJyJxEJASOio2EW8NYEtwCUJEMeBHeb8DmCAdCYb83b6/+kIgXG7AtcCtwKv4XU0RUATydmJ+O6YtM'+
			'Eb5gekA6YlsAL/XrErkBjTcWAbcHs4/gPva+uaLHeMSHcCeEpNcq0AHgFuCr9/w7v8SiD7XR1vCgA+7fABlkjK4GcLXFoT/zYnbbkcaBUaAvZGHprTzbqHbsTbyY/AJ3OY4xbgDtpXcgvwLREv9CzeBmybj/Tm0nKReA9+R6PNC4kbXU96i+RsEsk5BPCvrG/jV3OUYMQxN9pLGdrvSkzYAk7hVa7Og8wHuAhsF/E4MJ6KAz2UbrTOME8BnzN7Ha+LJXqlT9cR6KUaiWOBrJNI3InBpwwzBlyfFwITcyWg22ykJy1nmJ1E4iwBG4n31hDQRP6PxB22/3QkHqAaiZeh6gPL8Ho/BLweeej5GIk3A98RbOAySiPeCdwWmeh8isS78XtCYwQCS/EEevHGvAF4CP+qZ9u/GYkPA28Ahwj7ogQC/ZS7Y3qH7GrgAdLlonMV'+
			'iY8BT1Hu/gn4CWCicM5dRHWbz9YH1uFzo1hd4GxG4mF8PS22vS77sZO6wKE3W/Vv2QJZC9wMXM/ZjcTDwFbKWpnueg/2TIHDlphipSZbnRzEFyf6EyDmEokP4gsltk5mSeg9qBlb5IuVUy0BW53spMiXisRHqRZJUuCzRb5cmTVGKEVktmXWreSL3lOR821V/E4K3Xo/M0VIyK7Fr8hK4gZ/jFK/Y/XhlKSzhe66Tw06XRW76zyIN/p+4HvynxrEJN3JpwauCF+rzOVjj1jF3m6bz+ZjD12JrwUu8woBaXP53MZ+chPb8xcCUs2Z7ec2bcAF8D8iLVFQr1abogAAAABJRU5ErkJggg==';
		me._floors_button__img.ggOverSrc=hs;
		el.ggId="Floors button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: -1;';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : 150px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floors_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floors_button.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Icon_Visibility') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Icon_Visibility') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floors_button.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floors_button.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floors_button.style.transition='opacity 500ms ease 0ms, border-radius 0s';
				if (me._floors_button.ggCurrentLogicStateAlpha == 0) {
					me._floors_button.style.visibility=me._floors_button.ggVisible?'inherit':'hidden';
					me._floors_button.style.opacity=1;
				}
				else if (me._floors_button.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._floors_button.style.opacity == 0.0) { me._floors_button.style.visibility="hidden"; } }, 505);
					me._floors_button.style.opacity=0;
				}
				else {
					me._floors_button.style.visibility=me._floors_button.ggVisible?'inherit':'hidden';
					me._floors_button.style.opacity=1;
				}
			}
		}
		me._floors_button.logicBlock_alpha();
		me._floors_button.logicBlock_imageborderradius = function() {
			var newLogicStateImageBorderRadius;
			if (
				((me.elementMouseOver['floors_button'] == true))
			)
			{
				newLogicStateImageBorderRadius = 0;
			}
			else {
				newLogicStateImageBorderRadius = -1;
			}
			if (me._floors_button.ggCurrentLogicStateImageBorderRadius != newLogicStateImageBorderRadius) {
				me._floors_button.ggCurrentLogicStateImageBorderRadius = newLogicStateImageBorderRadius;
				me._floors_button.ggSubElement.style.transition='opacity 500ms ease 0ms, border-radius 0s';
				if (me._floors_button.ggCurrentLogicStateImageBorderRadius == 0) {
					me._floors_button.ggSubElement.style.borderRadius="10px";
				}
				else {
					me._floors_button.ggSubElement.style.borderRadius="0px";
				}
			}
		}
		me._floors_button.logicBlock_imageborderradius();
		me._floors_button.onclick=function (e) {
			player.setVariableValue('Floor_Visibility', !player.getVariableValue('Floor_Visibility'));
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
		}
		me._floors_button.onmouseenter=function (e) {
			me._floors_button__img.src=me._floors_button__img.ggOverSrc;
			me.elementMouseOver['floors_button']=true;
			me._floors_button.logicBlock_imageborderradius();
		}
		me._floors_button.onmouseleave=function (e) {
			me._floors_button__img.src=me._floors_button__img.ggNormalSrc;
			me.elementMouseOver['floors_button']=false;
			me._floors_button.logicBlock_imageborderradius();
		}
		me._floors_button.ggUpdatePosition=function (useTransition) {
		}
		me._main_main.appendChild(me._floors_button);
		el=me._quick_guide_b=document.createElement('div');
		el.ggId="Quick_guide_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 254px;';
		hs+='position : absolute;';
		hs+='top : -109px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._quick_guide_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._quick_guide_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._quick_guide_bg=document.createElement('div');
		el.ggId="Quick_guide_BG";
		el.ggDx=-854;
		el.ggDy=-373;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 2px;';
		hs+='height : 685px;';
		hs+='left : calc(50% - ((1380px + 0px) / 2) - 854px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((685px + 0px) / 2) - 373px);';
		hs+='visibility : hidden;';
		hs+='width : 1380px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._quick_guide_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._quick_guide_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._qg_outside_close_b=document.createElement('div');
		el.ggId="QG_Outside_Close_B";
		el.ggDx=4;
		el.ggDy=-6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -10;';
		hs+='border : 0px solid #000000;';
		hs+='height : 1080px;';
		hs+='left : calc(50% - ((1920px + 0px) / 2) + 4px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1080px + 0px) / 2) - 6px);';
		hs+='visibility : hidden;';
		hs+='width : 1920px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._qg_outside_close_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._qg_outside_close_b.onclick=function (e) {
			me._quick_guide_bg.style.transition='none';
			me._quick_guide_bg.style.visibility='hidden';
			me._quick_guide_bg.ggVisible=false;
		}
		me._qg_outside_close_b.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide_bg.appendChild(me._qg_outside_close_b);
		el=me._mouse_guide=document.createElement('div');
		els=me._mouse_guide__img=document.createElement('img');
		els.className='ggskin ggskin_mouse_guide';
		hs=basePath + 'images/mouse_guide.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Mouse_guide";
		el.ggDx=-2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 685px;';
		hs+='left : calc(50% - ((1380px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((685px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1380px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mouse_guide.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mouse_guide.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') == Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') != Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mouse_guide.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mouse_guide.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mouse_guide.style.transition='';
				if (me._mouse_guide.ggCurrentLogicStateVisible == 0) {
					me._mouse_guide.style.visibility=(Number(me._mouse_guide.style.opacity)>0||!me._mouse_guide.style.opacity)?'inherit':'hidden';
					me._mouse_guide.ggVisible=true;
				}
				else if (me._mouse_guide.ggCurrentLogicStateVisible == 1) {
					me._mouse_guide.style.visibility="hidden";
					me._mouse_guide.ggVisible=false;
				}
				else {
					me._mouse_guide.style.visibility=(Number(me._mouse_guide.style.opacity)>0||!me._mouse_guide.style.opacity)?'inherit':'hidden';
					me._mouse_guide.ggVisible=true;
				}
			}
		}
		me._mouse_guide.logicBlock_visible();
		me._mouse_guide.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide_bg.appendChild(me._mouse_guide);
		el=me._laptop_guide=document.createElement('div');
		els=me._laptop_guide__img=document.createElement('img');
		els.className='ggskin ggskin_laptop_guide';
		hs=basePath + 'images/laptop_guide.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Laptop_guide";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 685px;';
		hs+='left : calc(50% - ((1380px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((685px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 1380px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._laptop_guide.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._laptop_guide.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') != Number("1")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._laptop_guide.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._laptop_guide.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._laptop_guide.style.transition='';
				if (me._laptop_guide.ggCurrentLogicStateVisible == 0) {
					me._laptop_guide.style.visibility=(Number(me._laptop_guide.style.opacity)>0||!me._laptop_guide.style.opacity)?'inherit':'hidden';
					me._laptop_guide.ggVisible=true;
				}
				else if (me._laptop_guide.ggCurrentLogicStateVisible == 1) {
					me._laptop_guide.style.visibility="hidden";
					me._laptop_guide.ggVisible=false;
				}
				else {
					me._laptop_guide.style.visibility="hidden";
					me._laptop_guide.ggVisible=false;
				}
			}
		}
		me._laptop_guide.logicBlock_visible();
		me._laptop_guide.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide_bg.appendChild(me._laptop_guide);
		el=me._mobile_guide=document.createElement('div');
		els=me._mobile_guide__img=document.createElement('img');
		els.className='ggskin ggskin_mobile_guide';
		hs=basePath + 'images/mobile_guide.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Mobile_Guide";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 685px;';
		hs+='left : calc(50% - ((1380px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((685px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 1380px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile_guide.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_guide.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') == Number("2")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') != Number("2")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mobile_guide.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile_guide.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile_guide.style.transition='';
				if (me._mobile_guide.ggCurrentLogicStateVisible == 0) {
					me._mobile_guide.style.visibility=(Number(me._mobile_guide.style.opacity)>0||!me._mobile_guide.style.opacity)?'inherit':'hidden';
					me._mobile_guide.ggVisible=true;
				}
				else if (me._mobile_guide.ggCurrentLogicStateVisible == 1) {
					me._mobile_guide.style.visibility="hidden";
					me._mobile_guide.ggVisible=false;
				}
				else {
					me._mobile_guide.style.visibility="hidden";
					me._mobile_guide.ggVisible=false;
				}
			}
		}
		me._mobile_guide.logicBlock_visible();
		me._mobile_guide.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide_bg.appendChild(me._mobile_guide);
		el=me._right_arrow_1=document.createElement('div');
		els=me._right_arrow_1__img=document.createElement('img');
		els.className='ggskin ggskin_right_arrow_1';
		hs=basePath + 'images/right_arrow_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Right_arrow_1";
		el.ggDx=630;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((35px + 0px) / 2) + 630px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right_arrow_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right_arrow_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') >= Number("2")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') < Number("2")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._right_arrow_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._right_arrow_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._right_arrow_1.style.transition='';
				if (me._right_arrow_1.ggCurrentLogicStateVisible == 0) {
					me._right_arrow_1.style.visibility=(Number(me._right_arrow_1.style.opacity)>0||!me._right_arrow_1.style.opacity)?'inherit':'hidden';
					me._right_arrow_1.ggVisible=true;
				}
				else if (me._right_arrow_1.ggCurrentLogicStateVisible == 1) {
					me._right_arrow_1.style.visibility="hidden";
					me._right_arrow_1.ggVisible=false;
				}
				else {
					me._right_arrow_1.style.visibility=(Number(me._right_arrow_1.style.opacity)>0||!me._right_arrow_1.style.opacity)?'inherit':'hidden';
					me._right_arrow_1.ggVisible=true;
				}
			}
		}
		me._right_arrow_1.logicBlock_visible();
		me._right_arrow_1.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide_bg.appendChild(me._right_arrow_1);
		el=me._right_arrow_2=document.createElement('div');
		els=me._right_arrow_2__img=document.createElement('img');
		els.className='ggskin ggskin_right_arrow_2';
		hs=basePath + 'images/right_arrow_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Right_arrow_2";
		el.ggDx=630;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((35px + 0px) / 2) + 630px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right_arrow_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right_arrow_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') < Number("2")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') >= Number("2")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._right_arrow_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._right_arrow_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._right_arrow_2.style.transition='';
				if (me._right_arrow_2.ggCurrentLogicStateVisible == 0) {
					me._right_arrow_2.style.visibility=(Number(me._right_arrow_2.style.opacity)>0||!me._right_arrow_2.style.opacity)?'inherit':'hidden';
					me._right_arrow_2.ggVisible=true;
				}
				else if (me._right_arrow_2.ggCurrentLogicStateVisible == 1) {
					me._right_arrow_2.style.visibility="hidden";
					me._right_arrow_2.ggVisible=false;
				}
				else {
					me._right_arrow_2.style.visibility=(Number(me._right_arrow_2.style.opacity)>0||!me._right_arrow_2.style.opacity)?'inherit':'hidden';
					me._right_arrow_2.ggVisible=true;
				}
			}
		}
		me._right_arrow_2.logicBlock_visible();
		me._right_arrow_2.onclick=function (e) {
			if (
				(
					((player.getVariableValue('SlideShow_QG') < Number("2")))
				)
			) {
				player.setVariableValue('SlideShow_QG', player.getVariableValue('SlideShow_QG') + Number("1.00"));
			}
		}
		me._right_arrow_2.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide_bg.appendChild(me._right_arrow_2);
		el=me._left_arrow_1=document.createElement('div');
		els=me._left_arrow_1__img=document.createElement('img');
		els.className='ggskin ggskin_left_arrow_1';
		hs=basePath + 'images/left_arrow_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Left_arrow_1";
		el.ggDx=-630;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((35px + 0px) / 2) - 630px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left_arrow_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_arrow_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') == Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') > Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._left_arrow_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._left_arrow_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._left_arrow_1.style.transition='';
				if (me._left_arrow_1.ggCurrentLogicStateVisible == 0) {
					me._left_arrow_1.style.visibility=(Number(me._left_arrow_1.style.opacity)>0||!me._left_arrow_1.style.opacity)?'inherit':'hidden';
					me._left_arrow_1.ggVisible=true;
				}
				else if (me._left_arrow_1.ggCurrentLogicStateVisible == 1) {
					me._left_arrow_1.style.visibility="hidden";
					me._left_arrow_1.ggVisible=false;
				}
				else {
					me._left_arrow_1.style.visibility=(Number(me._left_arrow_1.style.opacity)>0||!me._left_arrow_1.style.opacity)?'inherit':'hidden';
					me._left_arrow_1.ggVisible=true;
				}
			}
		}
		me._left_arrow_1.logicBlock_visible();
		me._left_arrow_1.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide_bg.appendChild(me._left_arrow_1);
		el=me._left_arrow_2=document.createElement('div');
		els=me._left_arrow_2__img=document.createElement('img');
		els.className='ggskin ggskin_left_arrow_2';
		hs=basePath + 'images/left_arrow_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Left_arrow_2";
		el.ggDx=-630;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((35px + 0px) / 2) - 630px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left_arrow_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_arrow_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') > Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') == Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._left_arrow_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._left_arrow_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._left_arrow_2.style.transition='';
				if (me._left_arrow_2.ggCurrentLogicStateVisible == 0) {
					me._left_arrow_2.style.visibility=(Number(me._left_arrow_2.style.opacity)>0||!me._left_arrow_2.style.opacity)?'inherit':'hidden';
					me._left_arrow_2.ggVisible=true;
				}
				else if (me._left_arrow_2.ggCurrentLogicStateVisible == 1) {
					me._left_arrow_2.style.visibility="hidden";
					me._left_arrow_2.ggVisible=false;
				}
				else {
					me._left_arrow_2.style.visibility=(Number(me._left_arrow_2.style.opacity)>0||!me._left_arrow_2.style.opacity)?'inherit':'hidden';
					me._left_arrow_2.ggVisible=true;
				}
			}
		}
		me._left_arrow_2.logicBlock_visible();
		me._left_arrow_2.onclick=function (e) {
			if (
				(
					((player.getVariableValue('SlideShow_QG') >= Number("0")))
				)
			) {
				player.setVariableValue('SlideShow_QG', player.getVariableValue('SlideShow_QG') - Number("1.00"));
			}
		}
		me._left_arrow_2.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide_bg.appendChild(me._left_arrow_2);
		el=me._qg_close_b=document.createElement('div');
		els=me._qg_close_b__img=document.createElement('img');
		els.className='ggskin ggskin_qg_close_b';
		hs=basePath + 'images/qg_close_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="QG_Close_B";
		el.ggDx=600;
		el.ggDy=-290;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((135px + 0px) / 2) + 600px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) - 290px);';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._qg_close_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._qg_close_b.onclick=function (e) {
			me._quick_guide_bg.style.transition='none';
			me._quick_guide_bg.style.visibility='hidden';
			me._quick_guide_bg.ggVisible=false;
		}
		me._qg_close_b.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide_bg.appendChild(me._qg_close_b);
		me._quick_guide_b.appendChild(me._quick_guide_bg);
		me._main_main.appendChild(me._quick_guide_b);
		el=me._floorswitch_b=document.createElement('div');
		el.ggId="FloorSwitch_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorswitch_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorswitch_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._floor_b_panel=document.createElement('div');
		el.ggId="Floor_B_Panel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -2;';
		hs+='background : rgba(57,57,57,0.313726);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 120px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floor_b_panel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_b_panel.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Floor_Visibility') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Floor_Visibility') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._floor_b_panel.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._floor_b_panel.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._floor_b_panel.style.transition='right 500ms ease 0ms, bottom 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._floor_b_panel.ggCurrentLogicStatePosition == 0) {
					me._floor_b_panel.style.right='120px';
					me._floor_b_panel.style.bottom='0px';
				}
				else if (me._floor_b_panel.ggCurrentLogicStatePosition == 1) {
					me._floor_b_panel.style.right='120px';
					me._floor_b_panel.style.bottom='70px';
				}
				else {
					me._floor_b_panel.style.right='120px';
					me._floor_b_panel.style.bottom='0px';
				}
			}
		}
		me._floor_b_panel.logicBlock_position();
		me._floor_b_panel.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Floor_Visibility') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Floor_Visibility') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floor_b_panel.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floor_b_panel.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floor_b_panel.style.transition='right 500ms ease 0ms, bottom 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._floor_b_panel.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._floor_b_panel.style.opacity == 0.0) { me._floor_b_panel.style.visibility="hidden"; } }, 505);
					me._floor_b_panel.style.opacity=0;
				}
				else if (me._floor_b_panel.ggCurrentLogicStateAlpha == 1) {
					me._floor_b_panel.style.visibility=me._floor_b_panel.ggVisible?'inherit':'hidden';
					me._floor_b_panel.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._floor_b_panel.style.opacity == 0.0) { me._floor_b_panel.style.visibility="hidden"; } }, 505);
					me._floor_b_panel.style.opacity=0;
				}
			}
		}
		me._floor_b_panel.logicBlock_alpha();
		me._floor_b_panel.ggUpdatePosition=function (useTransition) {
		}
		el=me._floortext_1=document.createElement('div');
		els=me._floortext_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="FloorText_1";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: -2;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 40px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floortext_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("First Floor\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floortext_1.ggUpdateText();
		el.appendChild(els);
		me._floortext_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floortext_1.onclick=function (e) {
			player.openNext("{node13}","");
		}
		me._floortext_1.ggUpdatePosition=function (useTransition) {
		}
		me._floor_b_panel.appendChild(me._floortext_1);
		el=me._floortext_2=document.createElement('div');
		els=me._floortext_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="FloorText_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: -2;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floortext_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("Second Floor", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floortext_2.ggUpdateText();
		el.appendChild(els);
		me._floortext_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floortext_2.onclick=function (e) {
			player.openNext("{node29}","");
			player.setVariableValue('Room_visibility_1F', false);
		}
		me._floortext_2.ggUpdatePosition=function (useTransition) {
		}
		me._floor_b_panel.appendChild(me._floortext_2);
		el=me._floortext_3=document.createElement('div');
		els=me._floortext_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="FloorText_3";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: -2;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 40px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floortext_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("Third Floor", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floortext_3.ggUpdateText();
		el.appendChild(els);
		me._floortext_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floortext_3.onclick=function (e) {
			player.openNext("{node46}","");
			player.setVariableValue('Room_visibility_1F', false);
		}
		me._floortext_3.ggUpdatePosition=function (useTransition) {
		}
		me._floor_b_panel.appendChild(me._floortext_3);
		me._floorswitch_b.appendChild(me._floor_b_panel);
		me._main_main.appendChild(me._floorswitch_b);
		me.divSkin.appendChild(me._main_main);
		el=me._floor_plan_opt_2=document.createElement('div');
		el.ggId="floor plan opt 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floor_plan_opt_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._floor_plan_opt_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1)) || 
				((me.ggUserdata.tags.indexOf("2F") != -1)) || 
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("Exterior") != -1))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floor_plan_opt_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floor_plan_opt_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floor_plan_opt_2.style.transition='opacity 500ms ease-in-out 0ms';
				if (me._floor_plan_opt_2.ggCurrentLogicStateAlpha == 0) {
					me._floor_plan_opt_2.style.visibility=me._floor_plan_opt_2.ggVisible?'inherit':'hidden';
					me._floor_plan_opt_2.style.opacity=1;
				}
				else if (me._floor_plan_opt_2.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._floor_plan_opt_2.style.opacity == 0.0) { me._floor_plan_opt_2.style.visibility="hidden"; } }, 505);
					me._floor_plan_opt_2.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._floor_plan_opt_2.style.opacity == 0.0) { me._floor_plan_opt_2.style.visibility="hidden"; } }, 505);
					me._floor_plan_opt_2.style.opacity=0;
				}
			}
		}
		me._floor_plan_opt_2.logicBlock_alpha();
		me._floor_plan_opt_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FirstFloor';
		el.ggId="Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 280px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			me._map_1.ggUpdateConditionResize();
		}
		me._floor_plan_opt_2.appendChild(me._map_1);
		el=me._map_close_switch=document.createElement('div');
		els=me._map_close_switch__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KIDxwb2x5bGluZSBwb2ludHM9IjkgMTggMTUgMTIgOSA2Ii8+Cjwvc3ZnPgo=';
		me._map_close_switch__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Map close switch";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 290px;';
		hs+='top : 135px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_close_switch.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_close_switch.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._floor_plan_opt_2.style.transition='none';
			} else {
				me._floor_plan_opt_2.style.transition='all 900ms ease-out 0ms';
			}
			me._floor_plan_opt_2.ggParameter.rx=400;me._floor_plan_opt_2.ggParameter.ry=0;
			me._floor_plan_opt_2.style.transform=parameterToTransform(me._floor_plan_opt_2.ggParameter);
			me._map_icon.style.transition='none';
			me._map_icon.style.visibility=(Number(me._map_icon.style.opacity)>0||!me._map_icon.style.opacity)?'inherit':'hidden';
			me._map_icon.ggVisible=true;
			me._map_close_switch.style.transition='none';
			me._map_close_switch.style.visibility='hidden';
			me._map_close_switch.ggVisible=false;
			if (player.transitionsDisabled) {
				me._room_name.style.transition='none';
			} else {
				me._room_name.style.transition='all 0ms step-end 0ms';
			}
			me._room_name.ggParameter.rx=-15;me._room_name.ggParameter.ry=-260;
			me._room_name.style.transform=parameterToTransform(me._room_name.ggParameter);
			me._map_maxbutton.style.transition='none';
			me._map_maxbutton.style.visibility='hidden';
			me._map_maxbutton.ggVisible=false;
			if (player.transitionsDisabled) {
				me._floor_plan_opt_2.style.transition='none';
			} else {
				me._floor_plan_opt_2.style.transition='all 500ms ease-out 0ms';
			}
			me._floor_plan_opt_2.style.opacity='0';
			me._floor_plan_opt_2.style.visibility='hidden';
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
		}
		me._map_close_switch.ggUpdatePosition=function (useTransition) {
		}
		me._floor_plan_opt_2.appendChild(me._map_close_switch);
		el=me._map_maxbutton=document.createElement('div');
		els=me._map_maxbutton__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1tYXhpbWl6ZS0yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KIDxwb2x5bGluZSBwb2ludHM9IjE1IDMgMjEgMyAyMSA5Ii8+CiA8cG9seWxpbmUgcG9pbnRzPSI5IDIxIDMgMjEgMyAxNSIvPgogPGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiLz4KIDxsaW'+
			'5lIHgxPSIzIiB4Mj0iMTAiIHkxPSIyMSIgeTI9IjE0Ii8+Cjwvc3ZnPgo=';
		me._map_maxbutton__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Map_MaxButton";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 275px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_maxbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_maxbutton.onclick=function (e) {
			me._floor_plan_opt_2.style.transition='none';
			me._floor_plan_opt_2.style.visibility='hidden';
			me._floor_plan_opt_2.ggVisible=false;
			if (me._enlarge_map0.ggMapNotLoaded && me._enlarge_map0.ggInitMap) {
				me._enlarge_map0.ggInitMap(false);
				me._enlarge_map0.ggInitMapMarkers(true);
			}
			me._enlarge_map0.style.transition='none';
			me._enlarge_map0.style.visibility=(Number(me._enlarge_map0.style.opacity)>0||!me._enlarge_map0.style.opacity)?'inherit':'hidden';
			me._enlarge_map0.ggVisible=true;
			me._e_map_bg.style.transition='none';
			me._e_map_bg.style.visibility=(Number(me._e_map_bg.style.opacity)>0||!me._e_map_bg.style.opacity)?'inherit':'hidden';
			me._e_map_bg.ggVisible=true;
			if (player.transitionsDisabled) {
				me._enlarge_map0.style.transition='none';
			} else {
				me._enlarge_map0.style.transition='all 900ms linear 0ms';
			}
			me._enlarge_map0.style.opacity='1';
			me._enlarge_map0.style.visibility=me._enlarge_map0.ggVisible?'inherit':'hidden';
			if (me._enlarge_map0.ggMapNotLoaded && me._enlarge_map0.ggInitMap) {
				me._enlarge_map0.ggInitMap(false);
				me._enlarge_map0.ggInitMapMarkers(true);
			}
			if (player.transitionsDisabled) {
				me._e_map_bg.style.transition='none';
			} else {
				me._e_map_bg.style.transition='all 900ms ease-out 0ms';
			}
			me._e_map_bg.style.opacity='1';
			me._e_map_bg.style.visibility=me._e_map_bg.ggVisible?'inherit':'hidden';
			me._e_map_close_b.style.transition='none';
			me._e_map_close_b.style.visibility=(Number(me._e_map_close_b.style.opacity)>0||!me._e_map_close_b.style.opacity)?'inherit':'hidden';
			me._e_map_close_b.ggVisible=true;
			player.setVariableValue('tt_active', true);
			if (
				(
					((me.ggUserdata.tags.indexOf("1F") != -1))
				)
			||
				(
					((me.ggUserdata.tags.indexOf("2F") == -1)) || 
					((me.ggUserdata.tags.indexOf("3F") == -1))
				)
			) {
				me._enlarge_map0.ggChangeMap("FirstFloor");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("2F") != -1))
				)
			) {
				me._enlarge_map0.ggChangeMap("SecondFloor");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("3F") != -1))
				)
			) {
				me._enlarge_map0.ggChangeMap("ThirdFloor");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("1F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._floortoggle_1.style.transition='none';
				} else {
					me._floortoggle_1.style.transition='all 500ms ease-out 0ms';
				}
				me._floortoggle_1.style.opacity='1';
				me._floortoggle_1.style.visibility=me._floortoggle_1.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("2F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._floortoggle_2.style.transition='none';
				} else {
					me._floortoggle_2.style.transition='all 500ms ease-out 0ms';
				}
				me._floortoggle_2.style.opacity='1';
				me._floortoggle_2.style.visibility=me._floortoggle_2.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("3F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._floortoggle_3.style.transition='none';
				} else {
					me._floortoggle_3.style.transition='all 500ms ease-out 0ms';
				}
				me._floortoggle_3.style.opacity='1';
				me._floortoggle_3.style.visibility=me._floortoggle_3.ggVisible?'inherit':'hidden';
			}
			me._floortoggle_1.style.transition='none';
			me._floortoggle_1.ggParameter.sx=1.1;me._floortoggle_1.ggParameter.sy=1.1;
			me._floortoggle_1.style.transform=parameterToTransform(me._floortoggle_1.ggParameter);
			skin.updateSize(me._floortoggle_1);
			me._floortoggle_2.style.transition='none';
			me._floortoggle_2.ggParameter.sx=1.1;me._floortoggle_2.ggParameter.sy=1.1;
			me._floortoggle_2.style.transform=parameterToTransform(me._floortoggle_2.ggParameter);
			skin.updateSize(me._floortoggle_2);
			me._floortoggle_3.style.transition='none';
			me._floortoggle_3.ggParameter.sx=1.1;me._floortoggle_3.ggParameter.sy=1.1;
			me._floortoggle_3.style.transform=parameterToTransform(me._floortoggle_3.ggParameter);
			skin.updateSize(me._floortoggle_3);
			player.setVariableValue('Map_Pin_Enlarge', true);
			player.setVariableValue('Map_Pin_active_E', true);
			me._outside_close_b.style.transition='none';
			me._outside_close_b.style.visibility=(Number(me._outside_close_b.style.opacity)>0||!me._outside_close_b.style.opacity)?'inherit':'hidden';
			me._outside_close_b.ggVisible=true;
			me._room_name.style.transition='none';
			me._room_name.style.visibility='hidden';
			me._room_name.ggVisible=false;
			player.setVariableValue('Floor_Visibility', false);
			player.setVariableValue('Icon_Visibility', false);
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
		}
		me._map_maxbutton.ggUpdatePosition=function (useTransition) {
		}
		me._floor_plan_opt_2.appendChild(me._map_maxbutton);
		me.divSkin.appendChild(me._floor_plan_opt_2);
		el=me._room_name=document.createElement('div');
		els=me._room_name__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Room name";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='top : 280px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(161,161,161,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='font-size: 15px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._room_name.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._room_name.ggUpdateText();
		player.addListener('changenode', function() {
			me._room_name.ggUpdateText();
		});
		el.appendChild(els);
		me._room_name.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._room_name.onclick=function (e) {
			player.setVariableValue('Room_visibility_2F', !player.getVariableValue('Room_visibility_2F'));
			player.setVariableValue('Room_visibility_1F', !player.getVariableValue('Room_visibility_1F'));
			player.setVariableValue('Floor_Visibility', false);
		}
		me._room_name.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2f_room_panel=document.createElement('div');
		el.ggId="2F_room_Panel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #749eff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 248px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2f_room_panel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2f_room_panel.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2F") != -1)) && 
				((player.getVariableValue('Room_visibility_2F') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1)) || 
				((me.ggUserdata.tags.indexOf("Exterior") == -1)) || 
				((player.getVariableValue('Room_visibility_2F') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2f_room_panel.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2f_room_panel.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2f_room_panel.style.transition='';
				if (me.__2f_room_panel.ggCurrentLogicStateVisible == 0) {
					me.__2f_room_panel.style.visibility=(Number(me.__2f_room_panel.style.opacity)>0||!me.__2f_room_panel.style.opacity)?'inherit':'hidden';
					me.__2f_room_panel.ggVisible=true;
				}
				else if (me.__2f_room_panel.ggCurrentLogicStateVisible == 1) {
					me.__2f_room_panel.style.visibility="hidden";
					me.__2f_room_panel.ggVisible=false;
				}
				else {
					me.__2f_room_panel.style.visibility="hidden";
					me.__2f_room_panel.ggVisible=false;
				}
			}
		}
		me.__2f_room_panel.logicBlock_visible();
		me.__2f_room_panel.ggUpdatePosition=function (useTransition) {
		}
		me._room_name.appendChild(me.__2f_room_panel);
		el=me.__3f_room_panel=document.createElement('div');
		el.ggId="3F_room_Panel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #749eff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 248px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3f_room_panel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3f_room_panel.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2F") != -1)) && 
				((player.getVariableValue('Room_visibility_2F') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1)) || 
				((me.ggUserdata.tags.indexOf("Exterior") == -1)) || 
				((player.getVariableValue('Room_visibility_2F') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__3f_room_panel.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__3f_room_panel.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__3f_room_panel.style.transition='';
				if (me.__3f_room_panel.ggCurrentLogicStateVisible == 0) {
					me.__3f_room_panel.style.visibility=(Number(me.__3f_room_panel.style.opacity)>0||!me.__3f_room_panel.style.opacity)?'inherit':'hidden';
					me.__3f_room_panel.ggVisible=true;
				}
				else if (me.__3f_room_panel.ggCurrentLogicStateVisible == 1) {
					me.__3f_room_panel.style.visibility="hidden";
					me.__3f_room_panel.ggVisible=false;
				}
				else {
					me.__3f_room_panel.style.visibility="hidden";
					me.__3f_room_panel.ggVisible=false;
				}
			}
		}
		me.__3f_room_panel.logicBlock_visible();
		me.__3f_room_panel.ggUpdatePosition=function (useTransition) {
		}
		me._room_name.appendChild(me.__3f_room_panel);
		me.divSkin.appendChild(me._room_name);
		el=me._map_icon=document.createElement('div');
		els=me._map_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1tYXAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2Utd2lkdGg9IjEuNSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogPHBvbHlnb24gcG9pbnRzPSIxIDYgMSAyMiA4IDE4IDE2IDIyIDIzIDE4IDIzIDIgMTYgNiA4IDIgMSA2Ii8+CiA8bGluZSB4MT0iOCIgeDI9IjgiIHkxPSIyIiB5Mj0iMTgiLz4KIDxsaW5lIHgxPSIxNiIgeDI9IjE2Ii'+
			'B5MT0iNiIgeTI9IjIyIi8+Cjwvc3ZnPgo=';
		me._map_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Map icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_icon.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_icon.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._floor_plan_opt_2.style.transition='none';
			} else {
				me._floor_plan_opt_2.style.transition='all 900ms ease-out 0ms';
			}
			me._floor_plan_opt_2.ggParameter.rx=0;me._floor_plan_opt_2.ggParameter.ry=0;
			me._floor_plan_opt_2.style.transform=parameterToTransform(me._floor_plan_opt_2.ggParameter);
			me._map_icon.style.transition='none';
			me._map_icon.style.visibility='hidden';
			me._map_icon.ggVisible=false;
			me._map_close_switch.style.transition='none';
			me._map_close_switch.style.visibility=(Number(me._map_close_switch.style.opacity)>0||!me._map_close_switch.style.opacity)?'inherit':'hidden';
			me._map_close_switch.ggVisible=true;
			if (player.transitionsDisabled) {
				me._room_name.style.transition='none';
			} else {
				me._room_name.style.transition='all 0ms step-end 0ms';
			}
			me._room_name.ggParameter.rx=0;me._room_name.ggParameter.ry=0;
			me._room_name.style.transform=parameterToTransform(me._room_name.ggParameter);
			me._map_maxbutton.style.transition='none';
			me._map_maxbutton.style.visibility=(Number(me._map_maxbutton.style.opacity)>0||!me._map_maxbutton.style.opacity)?'inherit':'hidden';
			me._map_maxbutton.ggVisible=true;
			me._map_icon.style.transition='none';
			me._map_icon.ggParameter.rx=0;me._map_icon.ggParameter.ry=1;
			me._map_icon.style.transform=parameterToTransform(me._map_icon.ggParameter);
			if (player.transitionsDisabled) {
				me._floor_plan_opt_2.style.transition='none';
			} else {
				me._floor_plan_opt_2.style.transition='all 500ms ease-out 0ms';
			}
			me._floor_plan_opt_2.style.opacity='1';
			me._floor_plan_opt_2.style.visibility=me._floor_plan_opt_2.ggVisible?'inherit':'hidden';
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
		}
		me._map_icon.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._map_icon);
		el=me._hotspot_blue=document.createElement('div');
		el.ggId="Hotspot_Blue";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 187px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_blue.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspot_blue.ggUpdatePosition=function (useTransition) {
		}
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_blue.appendChild(me._markertemplate);
		me.divSkin.appendChild(me._hotspot_blue);
		el=me._floor_plan_opt_1=document.createElement('div');
		el.ggId="Floor plan opt 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floor_plan_opt_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._floor_plan_opt_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplans=document.createElement('div');
		el.ggId="FloorPlans";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 300px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplans.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplans.ggUpdatePosition=function (useTransition) {
		}
		el=me._firstfloor2=document.createElement('div');
		els=me._firstfloor2__img=document.createElement('img');
		els.className='ggskin ggskin_firstfloor2';
		hs=basePath + 'images/firstfloor2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="FirstFloor2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 300px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._firstfloor2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._firstfloor2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('VIS_Levels') == Number("0")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._firstfloor2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._firstfloor2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._firstfloor2.style.transition='opacity 1000ms ease 0ms';
				if (me._firstfloor2.ggCurrentLogicStateAlpha == 0) {
					me._firstfloor2.style.visibility=me._firstfloor2.ggVisible?'inherit':'hidden';
					me._firstfloor2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._firstfloor2.style.opacity == 0.0) { me._firstfloor2.style.visibility="hidden"; } }, 1005);
					me._firstfloor2.style.opacity=0;
				}
			}
		}
		me._firstfloor2.logicBlock_alpha();
		me._firstfloor2.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_node17=document.createElement('div');
		el.ggMarkerNodeId='{node17}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 196px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node17.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node17.onclick=function (e) {
			player.openNext('{node17}');
		}
		me._marker_node17.ggUpdatePosition=function (useTransition) {
		}
		me._firstfloor2.appendChild(me._marker_node17);
		el=me._marker_node13=document.createElement('div');
		el.ggMarkerNodeId='{node13}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 123px;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node13.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node13.onclick=function (e) {
			player.openNext('{node13}');
		}
		me._marker_node13.ggUpdatePosition=function (useTransition) {
		}
		me._firstfloor2.appendChild(me._marker_node13);
		el=me._marker_node7=document.createElement('div');
		el.ggMarkerNodeId='{node7}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 119px;';
		hs+='position : absolute;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node7.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node7.onclick=function (e) {
			player.openNext('{node7}');
		}
		me._marker_node7.ggUpdatePosition=function (useTransition) {
		}
		me._firstfloor2.appendChild(me._marker_node7);
		el=me._marker_node14=document.createElement('div');
		el.ggMarkerNodeId='{node14}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node14";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 44px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node14.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node14.onclick=function (e) {
			player.openNext('{node14}');
		}
		me._marker_node14.ggUpdatePosition=function (useTransition) {
		}
		me._firstfloor2.appendChild(me._marker_node14);
		el=me._marker_node15=document.createElement('div');
		el.ggMarkerNodeId='{node15}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node15";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 26px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node15.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node15.onclick=function (e) {
			player.openNext('{node15}');
		}
		me._marker_node15.ggUpdatePosition=function (useTransition) {
		}
		me._firstfloor2.appendChild(me._marker_node15);
		el=me._marker_node16=document.createElement('div');
		el.ggMarkerNodeId='{node16}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node16";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node16.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node16.onclick=function (e) {
			player.openNext('{node16}');
		}
		me._marker_node16.ggUpdatePosition=function (useTransition) {
		}
		me._firstfloor2.appendChild(me._marker_node16);
		el=me._marker_node9=document.createElement('div');
		el.ggMarkerNodeId='{node9}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 129px;';
		hs+='position : absolute;';
		hs+='top : 162px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node9.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node9.onclick=function (e) {
			player.openNext('{node9}');
		}
		me._marker_node9.ggUpdatePosition=function (useTransition) {
		}
		me._firstfloor2.appendChild(me._marker_node9);
		me._floorplans.appendChild(me._firstfloor2);
		el=me._secondfloor2=document.createElement('div');
		els=me._secondfloor2__img=document.createElement('img');
		els.className='ggskin ggskin_secondfloor2';
		hs=basePath + 'images/secondfloor2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="SecondFloor2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 300px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -1px;';
		hs+='top : -1px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._secondfloor2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._secondfloor2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('VIS_Levels') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._secondfloor2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._secondfloor2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._secondfloor2.style.transition='opacity 1000ms ease 0ms';
				if (me._secondfloor2.ggCurrentLogicStateAlpha == 0) {
					me._secondfloor2.style.visibility=me._secondfloor2.ggVisible?'inherit':'hidden';
					me._secondfloor2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._secondfloor2.style.opacity == 0.0) { me._secondfloor2.style.visibility="hidden"; } }, 1005);
					me._secondfloor2.style.opacity=0;
				}
			}
		}
		me._secondfloor2.logicBlock_alpha();
		me._secondfloor2.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_node29=document.createElement('div');
		el.ggMarkerNodeId='{node29}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 109px;';
		hs+='position : absolute;';
		hs+='top : 149px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node29.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node29.onclick=function (e) {
			player.openNext('{node29}');
		}
		me._marker_node29.ggUpdatePosition=function (useTransition) {
		}
		me._secondfloor2.appendChild(me._marker_node29);
		el=me._marker_node26=document.createElement('div');
		el.ggMarkerNodeId='{node26}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node26";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 134px;';
		hs+='position : absolute;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node26.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node26.onclick=function (e) {
			player.openNext('{node26}');
		}
		me._marker_node26.ggUpdatePosition=function (useTransition) {
		}
		me._secondfloor2.appendChild(me._marker_node26);
		el=me._marker_node28=document.createElement('div');
		el.ggMarkerNodeId='{node28}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node28";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 111px;';
		hs+='position : absolute;';
		hs+='top : 56px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node28.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node28.onclick=function (e) {
			player.openNext('{node28}');
		}
		me._marker_node28.ggUpdatePosition=function (useTransition) {
		}
		me._secondfloor2.appendChild(me._marker_node28);
		el=me._marker_node35=document.createElement('div');
		el.ggMarkerNodeId='{node35}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node35";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 147px;';
		hs+='position : absolute;';
		hs+='top : 157px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node35.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node35.onclick=function (e) {
			player.openNext('{node35}');
		}
		me._marker_node35.ggUpdatePosition=function (useTransition) {
		}
		me._secondfloor2.appendChild(me._marker_node35);
		me._floorplans.appendChild(me._secondfloor2);
		el=me._map_close_switch_1=document.createElement('div');
		els=me._map_close_switch_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9ucy11cCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMS41IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiA8cG9seWxpbmUgcG9pbnRzPSIxNyAxMSAxMiA2IDcgMTEiLz4KIDxwb2x5bGluZSBwb2ludHM9IjE3IDE4IDEyIDEzIDcgMTgiLz4KPC9zdmc+Cg==';
		me._map_close_switch_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Map close switch_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 300px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_close_switch_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_close_switch_1.onclick=function (e) {
			var flag=me._floorplans.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._floorplans.style.transition='none';
			} else {
				me._floorplans.style.transition='all 200ms ease-out 0ms';
			}
			if (flag) {
				me._floorplans.style.opacity='0';
				me._floorplans.style.visibility='hidden';
			} else {
				me._floorplans.style.opacity='1';
				me._floorplans.style.visibility=me._floorplans.ggVisible?'inherit':'hidden';
			}
			me._floorplans.ggOpacitiyActive=!flag;
			me._map_icon_1.style.transition='none';
			me._map_icon_1.style.visibility=(Number(me._map_icon_1.style.opacity)>0||!me._map_icon_1.style.opacity)?'inherit':'hidden';
			me._map_icon_1.ggVisible=true;
		}
		me._map_close_switch_1.ggUpdatePosition=function (useTransition) {
		}
		me._floorplans.appendChild(me._map_close_switch_1);
		me._floor_plan_opt_1.appendChild(me._floorplans);
		el=me._map_icon_1=document.createElement('div');
		els=me._map_icon_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1tYXAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2Utd2lkdGg9IjEuNSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogPHBvbHlnb24gcG9pbnRzPSIxIDYgMSAyMiA4IDE4IDE2IDIyIDIzIDE4IDIzIDIgMTYgNiA4IDIgMSA2Ii8+CiA8bGluZSB4MT0iOCIgeDI9IjgiIHkxPSIyIiB5Mj0iMTgiLz4KIDxsaW5lIHgxPSIxNiIgeDI9IjE2Ii'+
			'B5MT0iNiIgeTI9IjIyIi8+Cjwvc3ZnPgo=';
		me._map_icon_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Map icon_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_icon_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_icon_1.onclick=function (e) {
			var flag=me._floorplans.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._floorplans.style.transition='none';
			} else {
				me._floorplans.style.transition='all 500ms ease-in-out 0ms';
			}
			if (flag) {
				me._floorplans.style.opacity='0';
				me._floorplans.style.visibility='hidden';
			} else {
				me._floorplans.style.opacity='1';
				me._floorplans.style.visibility=me._floorplans.ggVisible?'inherit':'hidden';
			}
			me._floorplans.ggOpacitiyActive=!flag;
			me._map_icon_1.style.transition='none';
			me._map_icon_1.style.visibility='hidden';
			me._map_icon_1.ggVisible=false;
		}
		me._map_icon_1.ggUpdatePosition=function (useTransition) {
		}
		me._floor_plan_opt_1.appendChild(me._map_icon_1);
		me.divSkin.appendChild(me._floor_plan_opt_1);
		el=me._enlarge_map=document.createElement('div');
		el.ggId="Enlarge map";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 840px;';
		hs+='left : calc(50% - ((1106px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((840px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1106px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._enlarge_map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._enlarge_map.ggUpdatePosition=function (useTransition) {
		}
		el=me._e_map_bg=document.createElement('div');
		el.ggId="E_Map_BG";
		el.ggDx=0;
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(57,57,57,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='height : 900px;';
		hs+='left : calc(50% - ((1200px + 2px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((900px + 2px) / 2) + 10px);';
		hs+='visibility : hidden;';
		hs+='width : 1200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._e_map_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._e_map_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._e_map_close_b=document.createElement('div');
		els=me._e_map_close_b__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci14IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KIDxsaW5lIHgxPSIxOCIgeDI9IjYiIHkxPSI2IiB5Mj0iMTgiLz4KIDxsaW5lIHgxPSI2IiB4Mj0iMTgiIHkxPSI2IiB5Mj0iMTgiLz4KPC9zdmc+Cg==';
		me._e_map_close_b__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="E_Map_close B";
		el.ggDx=570;
		el.ggDy=-420;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 570px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) - 420px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._e_map_close_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._e_map_close_b.onclick=function (e) {
			me._floor_plan_opt_2.style.transition='none';
			me._floor_plan_opt_2.style.visibility=(Number(me._floor_plan_opt_2.style.opacity)>0||!me._floor_plan_opt_2.style.opacity)?'inherit':'hidden';
			me._floor_plan_opt_2.ggVisible=true;
			me._enlarge_map0.style.transition='none';
			me._enlarge_map0.style.visibility='hidden';
			me._enlarge_map0.ggVisible=false;
			me._e_map_close_b.style.transition='none';
			me._e_map_close_b.style.visibility='hidden';
			me._e_map_close_b.ggVisible=false;
			me._e_map_bg.style.transition='none';
			me._e_map_bg.style.visibility='hidden';
			me._e_map_bg.ggVisible=false;
			if (player.transitionsDisabled) {
				me._enlarge_map0.style.transition='none';
			} else {
				me._enlarge_map0.style.transition='all 900ms ease-out 0ms';
			}
			me._enlarge_map0.style.opacity='0';
			me._enlarge_map0.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._e_map_bg.style.transition='none';
			} else {
				me._e_map_bg.style.transition='all 500ms ease-out 0ms';
			}
			me._e_map_bg.style.opacity='0';
			me._e_map_bg.style.visibility='hidden';
			player.setVariableValue('tt_active', false);
			if (player.transitionsDisabled) {
				me._floortoggle_1.style.transition='none';
			} else {
				me._floortoggle_1.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_1.style.opacity='0.5';
			me._floortoggle_1.style.visibility=me._floortoggle_1.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floortoggle_2.style.transition='none';
			} else {
				me._floortoggle_2.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_2.style.opacity='0.5';
			me._floortoggle_2.style.visibility=me._floortoggle_2.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floortoggle_3.style.transition='none';
			} else {
				me._floortoggle_3.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_3.style.opacity='0.5';
			me._floortoggle_3.style.visibility=me._floortoggle_3.ggVisible?'inherit':'hidden';
			player.setVariableValue('Map_Pin_Enlarge', false);
			player.setVariableValue('Map_Pin_active_E', false);
			player.setVariableValue('Icon_Visibility', true);
		}
		me._e_map_close_b.ggUpdatePosition=function (useTransition) {
		}
		me._e_map_bg.appendChild(me._e_map_close_b);
		el=me._f_switch_l=document.createElement('div');
		els=me._f_switch_l__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2Utd2lkdGg9IjEuNSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogPHBvbHlsaW5lIHBvaW50cz0iMTUgMTggOSAxMiAxNSA2Ii8+Cjwvc3ZnPgo=';
		me._f_switch_l__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="F_switch_L";
		el.ggDx=-500;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 10;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) - 500px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f_switch_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f_switch_l.onclick=function (e) {
			me._enlarge_map0.ggChangeMap("SecondFloor");
		}
		me._f_switch_l.ggUpdatePosition=function (useTransition) {
		}
		me._e_map_bg.appendChild(me._f_switch_l);
		el=me._f_switch_r=document.createElement('div');
		els=me._f_switch_r__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KIDxwb2x5bGluZSBwb2ludHM9IjkgMTggMTUgMTIgOSA2Ii8+Cjwvc3ZnPgo=';
		me._f_switch_r__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="F_switch_R";
		el.ggDx=500;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 10;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 500px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f_switch_r.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f_switch_r.ggUpdatePosition=function (useTransition) {
		}
		me._e_map_bg.appendChild(me._f_switch_r);
		el=me._floortoggle_1=document.createElement('div');
		els=me._floortoggle_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="FloorToggle_1";
		el.ggDx=-400;
		el.ggDy=410;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((150px + 0px) / 2) - 400px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 410px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 0px solid rgba(255,255,255,0.392157);';
		hs+='font-size: 20px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floortoggle_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("First Floor", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floortoggle_1.ggUpdateText();
		el.appendChild(els);
		me._floortoggle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floortoggle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("2F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._floortoggle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._floortoggle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._floortoggle_1.style.transition='transform 0s, opacity 0s';
				if (me._floortoggle_1.ggCurrentLogicStateScaling == 0) {
					me._floortoggle_1.ggParameter.sx = 1.1;
					me._floortoggle_1.ggParameter.sy = 1.1;
					me._floortoggle_1.style.transform=parameterToTransform(me._floortoggle_1.ggParameter);
					skin.updateSize(me._floortoggle_1);
				}
				else if (me._floortoggle_1.ggCurrentLogicStateScaling == 1) {
					me._floortoggle_1.ggParameter.sx = 1;
					me._floortoggle_1.ggParameter.sy = 1;
					me._floortoggle_1.style.transform=parameterToTransform(me._floortoggle_1.ggParameter);
					skin.updateSize(me._floortoggle_1);
				}
				else {
					me._floortoggle_1.ggParameter.sx = 1;
					me._floortoggle_1.ggParameter.sy = 1;
					me._floortoggle_1.style.transform=parameterToTransform(me._floortoggle_1.ggParameter);
					skin.updateSize(me._floortoggle_1);
				}
			}
		}
		me._floortoggle_1.logicBlock_scaling();
		me._floortoggle_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("2F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floortoggle_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floortoggle_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floortoggle_1.style.transition='transform 0s, opacity 0s';
				if (me._floortoggle_1.ggCurrentLogicStateAlpha == 0) {
					me._floortoggle_1.style.visibility=me._floortoggle_1.ggVisible?'inherit':'hidden';
					me._floortoggle_1.style.opacity=1;
				}
				else if (me._floortoggle_1.ggCurrentLogicStateAlpha == 1) {
					me._floortoggle_1.style.visibility=me._floortoggle_1.ggVisible?'inherit':'hidden';
					me._floortoggle_1.style.opacity=0.5;
				}
				else {
					me._floortoggle_1.style.visibility=me._floortoggle_1.ggVisible?'inherit':'hidden';
					me._floortoggle_1.style.opacity=0.5;
				}
			}
		}
		me._floortoggle_1.logicBlock_alpha();
		me._floortoggle_1.onclick=function (e) {
			me._enlarge_map0.ggChangeMap("FirstFloor");
			if (player.transitionsDisabled) {
				me._floortoggle_1.style.transition='none';
			} else {
				me._floortoggle_1.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_1.style.opacity='1';
			me._floortoggle_1.style.visibility=me._floortoggle_1.ggVisible?'inherit':'hidden';
			me._floortoggle_1.style.transition='none';
			me._floortoggle_1.ggParameter.sx=1.1;me._floortoggle_1.ggParameter.sy=1.1;
			me._floortoggle_1.style.transform=parameterToTransform(me._floortoggle_1.ggParameter);
			skin.updateSize(me._floortoggle_1);
			if (player.transitionsDisabled) {
				me._floortoggle_2.style.transition='none';
			} else {
				me._floortoggle_2.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_2.style.opacity='0.5';
			me._floortoggle_2.style.visibility=me._floortoggle_2.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floortoggle_2.style.transition='none';
			} else {
				me._floortoggle_2.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_2.ggParameter.sx=1;me._floortoggle_2.ggParameter.sy=1;
			me._floortoggle_2.style.transform=parameterToTransform(me._floortoggle_2.ggParameter);
			setTimeout(function() {skin.updateSize(me._floortoggle_2);}, 550);
			if (player.transitionsDisabled) {
				me._floortoggle_3.style.transition='none';
			} else {
				me._floortoggle_3.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_3.style.opacity='0.5';
			me._floortoggle_3.style.visibility=me._floortoggle_3.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floortoggle_3.style.transition='none';
			} else {
				me._floortoggle_3.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_3.ggParameter.sx=1;me._floortoggle_3.ggParameter.sy=1;
			me._floortoggle_3.style.transform=parameterToTransform(me._floortoggle_3.ggParameter);
			setTimeout(function() {skin.updateSize(me._floortoggle_3);}, 550);
		}
		me._floortoggle_1.ggUpdatePosition=function (useTransition) {
		}
		me._e_map_bg.appendChild(me._floortoggle_1);
		el=me._floortoggle_2=document.createElement('div');
		els=me._floortoggle_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="FloorToggle_2";
		el.ggDx=-4;
		el.ggDy=408;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((150px + 0px) / 2) - 4px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 408px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 0px solid rgba(255,255,255,0.392157);';
		hs+='font-size: 20px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floortoggle_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("Second Floor", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floortoggle_2.ggUpdateText();
		el.appendChild(els);
		me._floortoggle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floortoggle_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.ggUserdata.tags.indexOf("2F") != -1))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._floortoggle_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._floortoggle_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._floortoggle_2.style.transition='transform 0s, opacity 0s';
				if (me._floortoggle_2.ggCurrentLogicStateScaling == 0) {
					me._floortoggle_2.ggParameter.sx = 1.1;
					me._floortoggle_2.ggParameter.sy = 1.1;
					me._floortoggle_2.style.transform=parameterToTransform(me._floortoggle_2.ggParameter);
					skin.updateSize(me._floortoggle_2);
				}
				else if (me._floortoggle_2.ggCurrentLogicStateScaling == 1) {
					me._floortoggle_2.ggParameter.sx = 1;
					me._floortoggle_2.ggParameter.sy = 1;
					me._floortoggle_2.style.transform=parameterToTransform(me._floortoggle_2.ggParameter);
					skin.updateSize(me._floortoggle_2);
				}
				else {
					me._floortoggle_2.ggParameter.sx = 1;
					me._floortoggle_2.ggParameter.sy = 1;
					me._floortoggle_2.style.transform=parameterToTransform(me._floortoggle_2.ggParameter);
					skin.updateSize(me._floortoggle_2);
				}
			}
		}
		me._floortoggle_2.logicBlock_scaling();
		me._floortoggle_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.ggUserdata.tags.indexOf("2F") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floortoggle_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floortoggle_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floortoggle_2.style.transition='transform 0s, opacity 0s';
				if (me._floortoggle_2.ggCurrentLogicStateAlpha == 0) {
					me._floortoggle_2.style.visibility=me._floortoggle_2.ggVisible?'inherit':'hidden';
					me._floortoggle_2.style.opacity=1;
				}
				else if (me._floortoggle_2.ggCurrentLogicStateAlpha == 1) {
					me._floortoggle_2.style.visibility=me._floortoggle_2.ggVisible?'inherit':'hidden';
					me._floortoggle_2.style.opacity=0.5;
				}
				else {
					me._floortoggle_2.style.visibility=me._floortoggle_2.ggVisible?'inherit':'hidden';
					me._floortoggle_2.style.opacity=0.5;
				}
			}
		}
		me._floortoggle_2.logicBlock_alpha();
		me._floortoggle_2.onclick=function (e) {
			me._enlarge_map0.ggChangeMap("SecondFloor");
			me._floortoggle_2.style.transition='none';
			me._floortoggle_2.ggParameter.sx=1.1;me._floortoggle_2.ggParameter.sy=1.1;
			me._floortoggle_2.style.transform=parameterToTransform(me._floortoggle_2.ggParameter);
			skin.updateSize(me._floortoggle_2);
			if (player.transitionsDisabled) {
				me._floortoggle_2.style.transition='none';
			} else {
				me._floortoggle_2.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_2.style.opacity='1';
			me._floortoggle_2.style.visibility=me._floortoggle_2.ggVisible?'inherit':'hidden';
			me._floortoggle_1.style.transition='none';
			me._floortoggle_1.ggParameter.sx=1;me._floortoggle_1.ggParameter.sy=1;
			me._floortoggle_1.style.transform=parameterToTransform(me._floortoggle_1.ggParameter);
			skin.updateSize(me._floortoggle_1);
			if (player.transitionsDisabled) {
				me._floortoggle_1.style.transition='none';
			} else {
				me._floortoggle_1.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_1.style.opacity='0.5';
			me._floortoggle_1.style.visibility=me._floortoggle_1.ggVisible?'inherit':'hidden';
			me._floortoggle_3.style.transition='none';
			me._floortoggle_3.ggParameter.sx=1;me._floortoggle_3.ggParameter.sy=1;
			me._floortoggle_3.style.transform=parameterToTransform(me._floortoggle_3.ggParameter);
			skin.updateSize(me._floortoggle_3);
			if (player.transitionsDisabled) {
				me._floortoggle_3.style.transition='none';
			} else {
				me._floortoggle_3.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_3.style.opacity='0.5';
			me._floortoggle_3.style.visibility=me._floortoggle_3.ggVisible?'inherit':'hidden';
		}
		me._floortoggle_2.ggUpdatePosition=function (useTransition) {
		}
		me._e_map_bg.appendChild(me._floortoggle_2);
		el=me._floortoggle_3=document.createElement('div');
		els=me._floortoggle_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="FloorToggle_3";
		el.ggDx=400;
		el.ggDy=410;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 400px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 410px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 0px solid rgba(255,255,255,0.392157);';
		hs+='font-size: 20px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floortoggle_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("Third Floor", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floortoggle_3.ggUpdateText();
		el.appendChild(els);
		me._floortoggle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floortoggle_3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) && 
				((me.ggUserdata.tags.indexOf("2F") == -1))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._floortoggle_3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._floortoggle_3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._floortoggle_3.style.transition='transform 0s, opacity 0s';
				if (me._floortoggle_3.ggCurrentLogicStateScaling == 0) {
					me._floortoggle_3.ggParameter.sx = 1.1;
					me._floortoggle_3.ggParameter.sy = 1.1;
					me._floortoggle_3.style.transform=parameterToTransform(me._floortoggle_3.ggParameter);
					skin.updateSize(me._floortoggle_3);
				}
				else if (me._floortoggle_3.ggCurrentLogicStateScaling == 1) {
					me._floortoggle_3.ggParameter.sx = 1;
					me._floortoggle_3.ggParameter.sy = 1;
					me._floortoggle_3.style.transform=parameterToTransform(me._floortoggle_3.ggParameter);
					skin.updateSize(me._floortoggle_3);
				}
				else {
					me._floortoggle_3.ggParameter.sx = 1;
					me._floortoggle_3.ggParameter.sy = 1;
					me._floortoggle_3.style.transform=parameterToTransform(me._floortoggle_3.ggParameter);
					skin.updateSize(me._floortoggle_3);
				}
			}
		}
		me._floortoggle_3.logicBlock_scaling();
		me._floortoggle_3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("2F") == -1))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floortoggle_3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floortoggle_3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floortoggle_3.style.transition='transform 0s, opacity 0s';
				if (me._floortoggle_3.ggCurrentLogicStateAlpha == 0) {
					me._floortoggle_3.style.visibility=me._floortoggle_3.ggVisible?'inherit':'hidden';
					me._floortoggle_3.style.opacity=1;
				}
				else if (me._floortoggle_3.ggCurrentLogicStateAlpha == 1) {
					me._floortoggle_3.style.visibility=me._floortoggle_3.ggVisible?'inherit':'hidden';
					me._floortoggle_3.style.opacity=0.5;
				}
				else {
					me._floortoggle_3.style.visibility=me._floortoggle_3.ggVisible?'inherit':'hidden';
					me._floortoggle_3.style.opacity=0.5;
				}
			}
		}
		me._floortoggle_3.logicBlock_alpha();
		me._floortoggle_3.onclick=function (e) {
			me._enlarge_map0.ggChangeMap("ThirdFloor");
			me._floortoggle_3.style.transition='none';
			me._floortoggle_3.ggParameter.sx=1.1;me._floortoggle_3.ggParameter.sy=1.1;
			me._floortoggle_3.style.transform=parameterToTransform(me._floortoggle_3.ggParameter);
			skin.updateSize(me._floortoggle_3);
			if (player.transitionsDisabled) {
				me._floortoggle_3.style.transition='none';
			} else {
				me._floortoggle_3.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_3.style.opacity='1';
			me._floortoggle_3.style.visibility=me._floortoggle_3.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floortoggle_2.style.transition='none';
			} else {
				me._floortoggle_2.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_2.style.opacity='0.5';
			me._floortoggle_2.style.visibility=me._floortoggle_2.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floortoggle_2.style.transition='none';
			} else {
				me._floortoggle_2.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_2.ggParameter.sx=1;me._floortoggle_2.ggParameter.sy=1;
			me._floortoggle_2.style.transform=parameterToTransform(me._floortoggle_2.ggParameter);
			setTimeout(function() {skin.updateSize(me._floortoggle_2);}, 550);
			if (player.transitionsDisabled) {
				me._floortoggle_1.style.transition='none';
			} else {
				me._floortoggle_1.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_1.style.opacity='0.5';
			me._floortoggle_1.style.visibility=me._floortoggle_1.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floortoggle_1.style.transition='none';
			} else {
				me._floortoggle_1.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_1.ggParameter.sx=1;me._floortoggle_1.ggParameter.sy=1;
			me._floortoggle_1.style.transform=parameterToTransform(me._floortoggle_1.ggParameter);
			setTimeout(function() {skin.updateSize(me._floortoggle_1);}, 550);
		}
		me._floortoggle_3.ggUpdatePosition=function (useTransition) {
		}
		me._e_map_bg.appendChild(me._floortoggle_3);
		me._enlarge_map.appendChild(me._e_map_bg);
		el=me._enlarge_map0=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FirstFloor';
		el.ggId="Enlarge_Map";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 840px;';
		hs+='left : calc(50% - ((900px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((840px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 900px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._enlarge_map0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._enlarge_map0.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._enlarge_map0.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._enlarge_map0.ggCalculateFloorplanSize(mapDetails);
				me._enlarge_map0.ggShowSimpleFloorplan(mapDetails);
				me._enlarge_map0.ggPlaceMarkersOnSimpleFloorplan();
			}
		}
		me._enlarge_map0.ggUpdatePosition=function (useTransition) {
			me._enlarge_map0.ggUpdateConditionResize();
		}
		me._enlarge_map.appendChild(me._enlarge_map0);
		el=me._outside_close_b=document.createElement('div');
		el.ggId="Outside_Close_B";
		el.ggDx=0;
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -10;';
		hs+='border : 0px solid #000000;';
		hs+='height : 1080px;';
		hs+='left : calc(50% - ((1920px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1080px + 0px) / 2) + 10px);';
		hs+='visibility : hidden;';
		hs+='width : 1920px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._outside_close_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._outside_close_b.onclick=function (e) {
			me._floor_plan_opt_2.style.transition='none';
			me._floor_plan_opt_2.style.visibility=(Number(me._floor_plan_opt_2.style.opacity)>0||!me._floor_plan_opt_2.style.opacity)?'inherit':'hidden';
			me._floor_plan_opt_2.ggVisible=true;
			me._enlarge_map0.style.transition='none';
			me._enlarge_map0.style.visibility='hidden';
			me._enlarge_map0.ggVisible=false;
			me._outside_close_b.style.transition='none';
			me._outside_close_b.style.visibility='hidden';
			me._outside_close_b.ggVisible=false;
			me._e_map_bg.style.transition='none';
			me._e_map_bg.style.visibility='hidden';
			me._e_map_bg.ggVisible=false;
			if (player.transitionsDisabled) {
				me._enlarge_map0.style.transition='none';
			} else {
				me._enlarge_map0.style.transition='all 500ms ease-out 0ms';
			}
			me._enlarge_map0.style.opacity='0';
			me._enlarge_map0.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._e_map_bg.style.transition='none';
			} else {
				me._e_map_bg.style.transition='all 500ms ease-out 0ms';
			}
			me._e_map_bg.style.opacity='0';
			me._e_map_bg.style.visibility='hidden';
			player.setVariableValue('tt_active', false);
			if (player.transitionsDisabled) {
				me._floortoggle_1.style.transition='none';
			} else {
				me._floortoggle_1.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_1.style.opacity='0.5';
			me._floortoggle_1.style.visibility=me._floortoggle_1.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floortoggle_2.style.transition='none';
			} else {
				me._floortoggle_2.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_2.style.opacity='0.5';
			me._floortoggle_2.style.visibility=me._floortoggle_2.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floortoggle_3.style.transition='none';
			} else {
				me._floortoggle_3.style.transition='all 500ms ease-out 0ms';
			}
			me._floortoggle_3.style.opacity='0.5';
			me._floortoggle_3.style.visibility=me._floortoggle_3.ggVisible?'inherit':'hidden';
			player.setVariableValue('Map_Pin_Enlarge', false);
			player.setVariableValue('Map_Pin_active_E', false);
			me._room_name.style.transition='none';
			me._room_name.style.visibility=(Number(me._room_name.style.opacity)>0||!me._room_name.style.opacity)?'inherit':'hidden';
			me._room_name.ggVisible=true;
			player.setVariableValue('Icon_Visibility', true);
		}
		me._outside_close_b.ggUpdatePosition=function (useTransition) {
		}
		me._enlarge_map.appendChild(me._outside_close_b);
		me.divSkin.appendChild(me._enlarge_map);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 248px;';
		hs+='left : 1768px;';
		hs+='position : absolute;';
		hs+='top : 310px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1f_room_panel=document.createElement('div');
		el.ggId="1F_room_Panel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 350px;';
		hs+='position : absolute;';
		hs+='right : -2px;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1f_room_panel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1f_room_panel.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1)) && 
				((player.getVariableValue('Room_visibility_1F') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("2F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1)) || 
				((me.ggUserdata.tags.indexOf("Exterior") == -1)) || 
				((player.getVariableValue('Room_visibility_1F') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1f_room_panel.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1f_room_panel.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1f_room_panel.style.transition='';
				if (me.__1f_room_panel.ggCurrentLogicStateVisible == 0) {
					me.__1f_room_panel.style.visibility=(Number(me.__1f_room_panel.style.opacity)>0||!me.__1f_room_panel.style.opacity)?'inherit':'hidden';
					me.__1f_room_panel.ggVisible=true;
				}
				else if (me.__1f_room_panel.ggCurrentLogicStateVisible == 1) {
					me.__1f_room_panel.style.visibility="hidden";
					me.__1f_room_panel.ggVisible=false;
				}
				else {
					me.__1f_room_panel.style.visibility="hidden";
					me.__1f_room_panel.ggVisible=false;
				}
			}
		}
		me.__1f_room_panel.logicBlock_visible();
		me.__1f_room_panel.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_1=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 35;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_1.ggUpdating == true) return;
			me._cloner_1.ggUpdating = true;
			var el=me._cloner_1;
			var curNumCols = 0;
			curNumCols = me._cloner_1.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._cloner_1.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_1.getFilteredNodes(tourNodes, filter);
			me._cloner_1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_1.ggWidth) + 'px';
				parameter.width=me._cloner_1.ggWidth + 'px';
				parameter.height=me._cloner_1.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_1_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._cloner_1.ggNodeCount = me._cloner_1.ggNumFilterPassed;
			me._cloner_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_1.parentNode && me._cloner_1.parentNode.classList.contains('ggskin_subelement') && me._cloner_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "1F_Rooms";
		el.ggId="Cloner 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 0px);';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_1.childNodes.length; i++) {
				var child=me._cloner_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cloner_1.ggUpdatePosition=function (useTransition) {
			me._cloner_1.ggUpdate();
		}
		me.__1f_room_panel.appendChild(me._cloner_1);
		me._container_1.appendChild(me.__1f_room_panel);
		me.divSkin.appendChild(me._container_1);
		me._rooms_button.logicBlock_alpha();
		me._rooms_button.logicBlock_imageborderradius();
		me.elementMouseOver['rooms_button']=false;
		me._fullscreen.logicBlock_alpha();
		me._fullscreen.logicBlock_imageborderradius();
		me.elementMouseOver['fullscreen']=false;
		me._help.logicBlock_alpha();
		me._help.logicBlock_imageborderradius();
		me.elementMouseOver['help']=false;
		me._floors_button.logicBlock_alpha();
		me._floors_button.logicBlock_imageborderradius();
		me.elementMouseOver['floors_button']=false;
		me._mouse_guide.logicBlock_visible();
		me._laptop_guide.logicBlock_visible();
		me._mobile_guide.logicBlock_visible();
		me._right_arrow_1.logicBlock_visible();
		me._right_arrow_2.logicBlock_visible();
		me._left_arrow_1.logicBlock_visible();
		me._left_arrow_2.logicBlock_visible();
		me._floor_b_panel.logicBlock_position();
		me._floor_b_panel.logicBlock_alpha();
		me._floor_plan_opt_2.logicBlock_alpha();
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
			me._map_1__img.setAttribute('loading', 'lazy');
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1.ggFloorplanHeight / 2 + 'px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1.ggMapNotLoaded = false;
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap();
				me._map_1.ggInitMapMarkers();
			}
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 12;
					me._map_1.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_1.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		me.__2f_room_panel.logicBlock_visible();
		me.__3f_room_panel.logicBlock_visible();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._marker_normal;
		me._markertemplate__normalInst = clonedNormalElement;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='0px';
		me._markertemplate__normal.style.top='0px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._markertemplate);
		me._markertemplate__active = clonedActiveElement._marker_active;
		me._markertemplate__activeInst = clonedActiveElement;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='0px';
		me._markertemplate__active.style.top='0px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		me._firstfloor2.logicBlock_alpha();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node17);
		me._marker_node17__normal = clonedNormalElement._marker_normal;
		me._marker_node17__normalInst = clonedNormalElement;
		me._marker_node17__normal.style.visibility='inherit';
		me._marker_node17__normal.style.left='0px';
		me._marker_node17__normal.style.top='0px';
		me._marker_node17.ggMarkerNormal=me._marker_node17__normal;
		me._marker_node17.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node17);
		me._marker_node17__active = clonedActiveElement._marker_active;
		me._marker_node17__activeInst = clonedActiveElement;
		me._marker_node17__active.style.visibility='hidden';
		me._marker_node17__active.style.left='0px';
		me._marker_node17__active.style.top='0px';
		me._marker_node17.ggMarkerActive=me._marker_node17__active;
		me._marker_node17.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node17.firstChild) {
			me._marker_node17.insertBefore(me._marker_node17__active,me._marker_node17.firstChild);
		} else {
			me._marker_node17.appendChild(me._marker_node17__active);
		}
		if (me._marker_node17.firstChild) {
			me._marker_node17.insertBefore(me._marker_node17__normal,me._marker_node17.firstChild);
		} else {
			me._marker_node17.appendChild(me._marker_node17__normal);
		}
		for (var i = 0; i < me._marker_node17.childNodes.length; i++) {
			me._marker_node17.ggMarkerInstances.push(me._marker_node17.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node13);
		me._marker_node13__normal = clonedNormalElement._marker_normal;
		me._marker_node13__normalInst = clonedNormalElement;
		me._marker_node13__normal.style.visibility='inherit';
		me._marker_node13__normal.style.left='0px';
		me._marker_node13__normal.style.top='0px';
		me._marker_node13.ggMarkerNormal=me._marker_node13__normal;
		me._marker_node13.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node13);
		me._marker_node13__active = clonedActiveElement._marker_active;
		me._marker_node13__activeInst = clonedActiveElement;
		me._marker_node13__active.style.visibility='hidden';
		me._marker_node13__active.style.left='0px';
		me._marker_node13__active.style.top='0px';
		me._marker_node13.ggMarkerActive=me._marker_node13__active;
		me._marker_node13.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node13.firstChild) {
			me._marker_node13.insertBefore(me._marker_node13__active,me._marker_node13.firstChild);
		} else {
			me._marker_node13.appendChild(me._marker_node13__active);
		}
		if (me._marker_node13.firstChild) {
			me._marker_node13.insertBefore(me._marker_node13__normal,me._marker_node13.firstChild);
		} else {
			me._marker_node13.appendChild(me._marker_node13__normal);
		}
		for (var i = 0; i < me._marker_node13.childNodes.length; i++) {
			me._marker_node13.ggMarkerInstances.push(me._marker_node13.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node7);
		me._marker_node7__normal = clonedNormalElement._marker_normal;
		me._marker_node7__normalInst = clonedNormalElement;
		me._marker_node7__normal.style.visibility='inherit';
		me._marker_node7__normal.style.left='0px';
		me._marker_node7__normal.style.top='0px';
		me._marker_node7.ggMarkerNormal=me._marker_node7__normal;
		me._marker_node7.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node7);
		me._marker_node7__active = clonedActiveElement._marker_active;
		me._marker_node7__activeInst = clonedActiveElement;
		me._marker_node7__active.style.visibility='hidden';
		me._marker_node7__active.style.left='0px';
		me._marker_node7__active.style.top='0px';
		me._marker_node7.ggMarkerActive=me._marker_node7__active;
		me._marker_node7.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node7.firstChild) {
			me._marker_node7.insertBefore(me._marker_node7__active,me._marker_node7.firstChild);
		} else {
			me._marker_node7.appendChild(me._marker_node7__active);
		}
		if (me._marker_node7.firstChild) {
			me._marker_node7.insertBefore(me._marker_node7__normal,me._marker_node7.firstChild);
		} else {
			me._marker_node7.appendChild(me._marker_node7__normal);
		}
		for (var i = 0; i < me._marker_node7.childNodes.length; i++) {
			me._marker_node7.ggMarkerInstances.push(me._marker_node7.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node14);
		me._marker_node14__normal = clonedNormalElement._marker_normal;
		me._marker_node14__normalInst = clonedNormalElement;
		me._marker_node14__normal.style.visibility='inherit';
		me._marker_node14__normal.style.left='0px';
		me._marker_node14__normal.style.top='0px';
		me._marker_node14.ggMarkerNormal=me._marker_node14__normal;
		me._marker_node14.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node14);
		me._marker_node14__active = clonedActiveElement._marker_active;
		me._marker_node14__activeInst = clonedActiveElement;
		me._marker_node14__active.style.visibility='hidden';
		me._marker_node14__active.style.left='0px';
		me._marker_node14__active.style.top='0px';
		me._marker_node14.ggMarkerActive=me._marker_node14__active;
		me._marker_node14.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node14.firstChild) {
			me._marker_node14.insertBefore(me._marker_node14__active,me._marker_node14.firstChild);
		} else {
			me._marker_node14.appendChild(me._marker_node14__active);
		}
		if (me._marker_node14.firstChild) {
			me._marker_node14.insertBefore(me._marker_node14__normal,me._marker_node14.firstChild);
		} else {
			me._marker_node14.appendChild(me._marker_node14__normal);
		}
		for (var i = 0; i < me._marker_node14.childNodes.length; i++) {
			me._marker_node14.ggMarkerInstances.push(me._marker_node14.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node15);
		me._marker_node15__normal = clonedNormalElement._marker_normal;
		me._marker_node15__normalInst = clonedNormalElement;
		me._marker_node15__normal.style.visibility='inherit';
		me._marker_node15__normal.style.left='0px';
		me._marker_node15__normal.style.top='0px';
		me._marker_node15.ggMarkerNormal=me._marker_node15__normal;
		me._marker_node15.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node15);
		me._marker_node15__active = clonedActiveElement._marker_active;
		me._marker_node15__activeInst = clonedActiveElement;
		me._marker_node15__active.style.visibility='hidden';
		me._marker_node15__active.style.left='0px';
		me._marker_node15__active.style.top='0px';
		me._marker_node15.ggMarkerActive=me._marker_node15__active;
		me._marker_node15.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node15.firstChild) {
			me._marker_node15.insertBefore(me._marker_node15__active,me._marker_node15.firstChild);
		} else {
			me._marker_node15.appendChild(me._marker_node15__active);
		}
		if (me._marker_node15.firstChild) {
			me._marker_node15.insertBefore(me._marker_node15__normal,me._marker_node15.firstChild);
		} else {
			me._marker_node15.appendChild(me._marker_node15__normal);
		}
		for (var i = 0; i < me._marker_node15.childNodes.length; i++) {
			me._marker_node15.ggMarkerInstances.push(me._marker_node15.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node16);
		me._marker_node16__normal = clonedNormalElement._marker_normal;
		me._marker_node16__normalInst = clonedNormalElement;
		me._marker_node16__normal.style.visibility='inherit';
		me._marker_node16__normal.style.left='0px';
		me._marker_node16__normal.style.top='0px';
		me._marker_node16.ggMarkerNormal=me._marker_node16__normal;
		me._marker_node16.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node16);
		me._marker_node16__active = clonedActiveElement._marker_active;
		me._marker_node16__activeInst = clonedActiveElement;
		me._marker_node16__active.style.visibility='hidden';
		me._marker_node16__active.style.left='0px';
		me._marker_node16__active.style.top='0px';
		me._marker_node16.ggMarkerActive=me._marker_node16__active;
		me._marker_node16.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node16.firstChild) {
			me._marker_node16.insertBefore(me._marker_node16__active,me._marker_node16.firstChild);
		} else {
			me._marker_node16.appendChild(me._marker_node16__active);
		}
		if (me._marker_node16.firstChild) {
			me._marker_node16.insertBefore(me._marker_node16__normal,me._marker_node16.firstChild);
		} else {
			me._marker_node16.appendChild(me._marker_node16__normal);
		}
		for (var i = 0; i < me._marker_node16.childNodes.length; i++) {
			me._marker_node16.ggMarkerInstances.push(me._marker_node16.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node9);
		me._marker_node9__normal = clonedNormalElement._marker_normal;
		me._marker_node9__normalInst = clonedNormalElement;
		me._marker_node9__normal.style.visibility='inherit';
		me._marker_node9__normal.style.left='0px';
		me._marker_node9__normal.style.top='0px';
		me._marker_node9.ggMarkerNormal=me._marker_node9__normal;
		me._marker_node9.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node9);
		me._marker_node9__active = clonedActiveElement._marker_active;
		me._marker_node9__activeInst = clonedActiveElement;
		me._marker_node9__active.style.visibility='hidden';
		me._marker_node9__active.style.left='0px';
		me._marker_node9__active.style.top='0px';
		me._marker_node9.ggMarkerActive=me._marker_node9__active;
		me._marker_node9.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node9.firstChild) {
			me._marker_node9.insertBefore(me._marker_node9__active,me._marker_node9.firstChild);
		} else {
			me._marker_node9.appendChild(me._marker_node9__active);
		}
		if (me._marker_node9.firstChild) {
			me._marker_node9.insertBefore(me._marker_node9__normal,me._marker_node9.firstChild);
		} else {
			me._marker_node9.appendChild(me._marker_node9__normal);
		}
		for (var i = 0; i < me._marker_node9.childNodes.length; i++) {
			me._marker_node9.ggMarkerInstances.push(me._marker_node9.childNodes[i]);
		}
		me._secondfloor2.logicBlock_alpha();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node29);
		me._marker_node29__normal = clonedNormalElement._marker_normal;
		me._marker_node29__normalInst = clonedNormalElement;
		me._marker_node29__normal.style.visibility='inherit';
		me._marker_node29__normal.style.left='0px';
		me._marker_node29__normal.style.top='0px';
		me._marker_node29.ggMarkerNormal=me._marker_node29__normal;
		me._marker_node29.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node29);
		me._marker_node29__active = clonedActiveElement._marker_active;
		me._marker_node29__activeInst = clonedActiveElement;
		me._marker_node29__active.style.visibility='hidden';
		me._marker_node29__active.style.left='0px';
		me._marker_node29__active.style.top='0px';
		me._marker_node29.ggMarkerActive=me._marker_node29__active;
		me._marker_node29.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node29.firstChild) {
			me._marker_node29.insertBefore(me._marker_node29__active,me._marker_node29.firstChild);
		} else {
			me._marker_node29.appendChild(me._marker_node29__active);
		}
		if (me._marker_node29.firstChild) {
			me._marker_node29.insertBefore(me._marker_node29__normal,me._marker_node29.firstChild);
		} else {
			me._marker_node29.appendChild(me._marker_node29__normal);
		}
		for (var i = 0; i < me._marker_node29.childNodes.length; i++) {
			me._marker_node29.ggMarkerInstances.push(me._marker_node29.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node26);
		me._marker_node26__normal = clonedNormalElement._marker_normal;
		me._marker_node26__normalInst = clonedNormalElement;
		me._marker_node26__normal.style.visibility='inherit';
		me._marker_node26__normal.style.left='0px';
		me._marker_node26__normal.style.top='0px';
		me._marker_node26.ggMarkerNormal=me._marker_node26__normal;
		me._marker_node26.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node26);
		me._marker_node26__active = clonedActiveElement._marker_active;
		me._marker_node26__activeInst = clonedActiveElement;
		me._marker_node26__active.style.visibility='hidden';
		me._marker_node26__active.style.left='0px';
		me._marker_node26__active.style.top='0px';
		me._marker_node26.ggMarkerActive=me._marker_node26__active;
		me._marker_node26.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node26.firstChild) {
			me._marker_node26.insertBefore(me._marker_node26__active,me._marker_node26.firstChild);
		} else {
			me._marker_node26.appendChild(me._marker_node26__active);
		}
		if (me._marker_node26.firstChild) {
			me._marker_node26.insertBefore(me._marker_node26__normal,me._marker_node26.firstChild);
		} else {
			me._marker_node26.appendChild(me._marker_node26__normal);
		}
		for (var i = 0; i < me._marker_node26.childNodes.length; i++) {
			me._marker_node26.ggMarkerInstances.push(me._marker_node26.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node28);
		me._marker_node28__normal = clonedNormalElement._marker_normal;
		me._marker_node28__normalInst = clonedNormalElement;
		me._marker_node28__normal.style.visibility='inherit';
		me._marker_node28__normal.style.left='0px';
		me._marker_node28__normal.style.top='0px';
		me._marker_node28.ggMarkerNormal=me._marker_node28__normal;
		me._marker_node28.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node28);
		me._marker_node28__active = clonedActiveElement._marker_active;
		me._marker_node28__activeInst = clonedActiveElement;
		me._marker_node28__active.style.visibility='hidden';
		me._marker_node28__active.style.left='0px';
		me._marker_node28__active.style.top='0px';
		me._marker_node28.ggMarkerActive=me._marker_node28__active;
		me._marker_node28.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node28.firstChild) {
			me._marker_node28.insertBefore(me._marker_node28__active,me._marker_node28.firstChild);
		} else {
			me._marker_node28.appendChild(me._marker_node28__active);
		}
		if (me._marker_node28.firstChild) {
			me._marker_node28.insertBefore(me._marker_node28__normal,me._marker_node28.firstChild);
		} else {
			me._marker_node28.appendChild(me._marker_node28__normal);
		}
		for (var i = 0; i < me._marker_node28.childNodes.length; i++) {
			me._marker_node28.ggMarkerInstances.push(me._marker_node28.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node35);
		me._marker_node35__normal = clonedNormalElement._marker_normal;
		me._marker_node35__normalInst = clonedNormalElement;
		me._marker_node35__normal.style.visibility='inherit';
		me._marker_node35__normal.style.left='0px';
		me._marker_node35__normal.style.top='0px';
		me._marker_node35.ggMarkerNormal=me._marker_node35__normal;
		me._marker_node35.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node35);
		me._marker_node35__active = clonedActiveElement._marker_active;
		me._marker_node35__activeInst = clonedActiveElement;
		me._marker_node35__active.style.visibility='hidden';
		me._marker_node35__active.style.left='0px';
		me._marker_node35__active.style.top='0px';
		me._marker_node35.ggMarkerActive=me._marker_node35__active;
		me._marker_node35.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node35.firstChild) {
			me._marker_node35.insertBefore(me._marker_node35__active,me._marker_node35.firstChild);
		} else {
			me._marker_node35.appendChild(me._marker_node35__active);
		}
		if (me._marker_node35.firstChild) {
			me._marker_node35.insertBefore(me._marker_node35__normal,me._marker_node35.firstChild);
		} else {
			me._marker_node35.appendChild(me._marker_node35__normal);
		}
		for (var i = 0; i < me._marker_node35.childNodes.length; i++) {
			me._marker_node35.ggMarkerInstances.push(me._marker_node35.childNodes[i]);
		}
		me._floortoggle_1.logicBlock_scaling();
		me._floortoggle_1.logicBlock_alpha();
		me._floortoggle_2.logicBlock_scaling();
		me._floortoggle_2.logicBlock_alpha();
		me._floortoggle_3.logicBlock_scaling();
		me._floortoggle_3.logicBlock_alpha();
		me._enlarge_map0.ggMarkerInstances=[];
		me._enlarge_map0.ggLastNodeId=null;
		me._enlarge_map0.ggSimpleFloorplanMarkerArray=[];
		me._enlarge_map0.ggFloorplanWidth=0;
		me._enlarge_map0.ggFloorplanHeight=0;
		me._enlarge_map0__mapdiv=document.createElement('div');
		me._enlarge_map0__mapdiv.className='ggskin ggskin_map';
		me._enlarge_map0.appendChild(me._enlarge_map0__mapdiv);
		me._enlarge_map0__img=document.createElement('img');
		me._enlarge_map0__img.className='ggskin ggskin_map';
		me._enlarge_map0__mapdiv.appendChild(me._enlarge_map0__img);
		me._enlarge_map0.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._enlarge_map0.clientWidth;
			var mapHeight = me._enlarge_map0.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._enlarge_map0.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._enlarge_map0__img.setAttribute('src', imageFilename);
			me._enlarge_map0__img.setAttribute('loading', 'lazy');
		me._enlarge_map0__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._enlarge_map0.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._enlarge_map0.ggFloorplanHeight / 2 + 'px;width:' + me._enlarge_map0.ggFloorplanWidth + 'px;height:' + me._enlarge_map0.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._enlarge_map0__img.setAttribute('style','width:' + me._enlarge_map0.ggFloorplanWidth + 'px;height:' + me._enlarge_map0.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._enlarge_map0.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._enlarge_map0.clientWidth / me._enlarge_map0.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._enlarge_map0.ggFloorplanHeight = me._enlarge_map0.clientHeight;
				me._enlarge_map0.ggFloorplanWidth = me._enlarge_map0.ggFloorplanHeight * floorplanAR;
			} else {
				me._enlarge_map0.ggFloorplanWidth = me._enlarge_map0.clientWidth;
				me._enlarge_map0.ggFloorplanHeight = me._enlarge_map0.ggFloorplanWidth / floorplanAR;
			}
		}
		me._enlarge_map0.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._enlarge_map0.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._enlarge_map0.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._enlarge_map0.ggPermeableMap = true;
			} else {
				me._enlarge_map0.ggPermeableMap = false;
			}
			me._enlarge_map0.ggCalculateFloorplanSize(mapDetails);
			me._enlarge_map0.ggShowSimpleFloorplan(mapDetails);
			me._enlarge_map0.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._enlarge_map0.ggMapNotLoaded = false;
		}
		me._enlarge_map0.ggClearMap=function() {
			me._enlarge_map0.ggClearMapMarkers();
			me._enlarge_map0.ggMapNotLoaded = true;
		}
		me._enlarge_map0.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._enlarge_map0.ggMapId = mapId;
			if (!me._enlarge_map0.ggMapNotLoaded) {
				me._enlarge_map0.ggClearMap();
				me._enlarge_map0.ggInitMap();
				me._enlarge_map0.ggInitMapMarkers();
			}
		}
		me._enlarge_map0.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._enlarge_map0.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._enlarge_map0.ggMapId);
					var xPos = (me._enlarge_map0.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._enlarge_map0.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._enlarge_map0.ggHMarkerAnchorOffset;
					yPos -= me._enlarge_map0.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._enlarge_map0.style['z-index'] + 2;
				}
			}
		}
		me._enlarge_map0.ggInitMapMarkers=function() {
			me._enlarge_map0.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._enlarge_map0.ggFilteredIds = [];
			if (me._enlarge_map0.ggFilter != '') {
				var filter = me._enlarge_map0.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._enlarge_map0.ggFilteredIds.push(nodeId);
					}
				}
				if (me._enlarge_map0.ggFilteredIds.length > 0) ids = me._enlarge_map0.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._enlarge_map0.ggMapId);
				if (coords.length>=2) {
					me._enlarge_map0.ggHMarkerAnchorOffset = 12;
					me._enlarge_map0.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._enlarge_map0.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._enlarge_map0.ggSimpleFloorplanMarkerArray[id] = marker;
					me._enlarge_map0__mapdiv.appendChild(marker);
				}
			}
			me._enlarge_map0.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._enlarge_map0);
		}
		me._enlarge_map0.ggClearMapMarkers=function() {
			for (id in me._enlarge_map0.ggSimpleFloorplanMarkerArray) {
				if (me._enlarge_map0.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._enlarge_map0__mapdiv.removeChild(me._enlarge_map0.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._enlarge_map0.ggMarkerInstances=[];
			me._enlarge_map0.ggSimpleFloorplanMarkerArray=[];
		}
		me.__1f_room_panel.logicBlock_visible();
		player.addListener('changenode', function(event) {
			me._rooms_button.logicBlock_alpha();
			me._fullscreen.logicBlock_alpha();
			me._help.logicBlock_alpha();
			me._floors_button.logicBlock_alpha();
			me._mouse_guide.logicBlock_visible();
			me._laptop_guide.logicBlock_visible();
			me._mobile_guide.logicBlock_visible();
			me._right_arrow_1.logicBlock_visible();
			me._right_arrow_2.logicBlock_visible();
			me._left_arrow_1.logicBlock_visible();
			me._left_arrow_2.logicBlock_visible();
			me._floor_b_panel.logicBlock_position();
			me._floor_b_panel.logicBlock_alpha();
			me._floor_plan_opt_2.logicBlock_alpha();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
			me.__2f_room_panel.logicBlock_visible();
			me.__3f_room_panel.logicBlock_visible();
			me._firstfloor2.logicBlock_alpha();
			me._secondfloor2.logicBlock_alpha();
			me._floortoggle_1.logicBlock_scaling();
			me._floortoggle_1.logicBlock_alpha();
			me._floortoggle_2.logicBlock_scaling();
			me._floortoggle_2.logicBlock_alpha();
			me._floortoggle_3.logicBlock_scaling();
			me._floortoggle_3.logicBlock_alpha();
			for (var i=0; i < me._enlarge_map0.ggMarkerInstances.length; i++) {
				me._enlarge_map0.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._enlarge_map0.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._enlarge_map0.ggCalculateFloorplanSize(mapDetails);
				me._enlarge_map0.ggShowSimpleFloorplan(mapDetails);
				me._enlarge_map0.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._enlarge_map0.ggLastNodeId) {
				var lastActiveMarker = me._enlarge_map0.ggSimpleFloorplanMarkerArray[me._enlarge_map0.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._enlarge_map0.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._enlarge_map0.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._enlarge_map0.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._enlarge_map0.ggChangeMap(mapId);
					}
				}
			}
			me._enlarge_map0.ggLastNodeId = id;
			me.__1f_room_panel.logicBlock_visible();
			me._cloner_1.ggUpdateConditionNodeChange();
		});
		player.addListener('configloaded', function(event) {
			me._rooms_button.logicBlock_alpha();
			me._fullscreen.logicBlock_alpha();
			me._help.logicBlock_alpha();
			me._floors_button.logicBlock_alpha();
			me._mouse_guide.logicBlock_visible();
			me._laptop_guide.logicBlock_visible();
			me._mobile_guide.logicBlock_visible();
			me._right_arrow_1.logicBlock_visible();
			me._right_arrow_2.logicBlock_visible();
			me._left_arrow_1.logicBlock_visible();
			me._left_arrow_2.logicBlock_visible();
			me._floor_b_panel.logicBlock_position();
			me._floor_b_panel.logicBlock_alpha();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
			me.__2f_room_panel.logicBlock_visible();
			me.__3f_room_panel.logicBlock_visible();
			me._firstfloor2.logicBlock_alpha();
			me._secondfloor2.logicBlock_alpha();
			for (var i=0; i < me._enlarge_map0.ggMarkerInstances.length; i++) {
				me._enlarge_map0.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._enlarge_map0.ggVisible) {
				me._enlarge_map0.ggClearMap();
				me._enlarge_map0.ggInitMap(false);
				me._enlarge_map0.ggInitMapMarkers(true);
			}
			me.__1f_room_panel.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_hastouch();
			}
			for (var i=0; i < me._enlarge_map0.ggMarkerInstances.length; i++) {
				me._enlarge_map0.ggMarkerInstances[i].ggEvent_hastouch();
			}
		});
		player.addListener('positionchanged', function(event) {
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_positionchanged();
			}
			for (var i=0; i < me._enlarge_map0.ggMarkerInstances.length; i++) {
				me._enlarge_map0.ggMarkerInstances[i].ggEvent_positionchanged();
			}
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_phone.logicBlock();
		});
		player.addListener('varchanged_Floor_Visibility', function(event) {
			me._floor_b_panel.logicBlock_position();
			me._floor_b_panel.logicBlock_alpha();
		});
		player.addListener('varchanged_Icon_Visibility', function(event) {
			me._rooms_button.logicBlock_alpha();
			me._fullscreen.logicBlock_alpha();
			me._help.logicBlock_alpha();
			me._floors_button.logicBlock_alpha();
		});
		player.addListener('varchanged_Map_Pin_Enlarge', function(event) {
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_varchanged_Map_Pin_Enlarge();
			}
			for (var i=0; i < me._enlarge_map0.ggMarkerInstances.length; i++) {
				me._enlarge_map0.ggMarkerInstances[i].ggEvent_varchanged_Map_Pin_Enlarge();
			}
		});
		player.addListener('varchanged_Map_Pin_active_E', function(event) {
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_varchanged_Map_Pin_active_E();
			}
			for (var i=0; i < me._enlarge_map0.ggMarkerInstances.length; i++) {
				me._enlarge_map0.ggMarkerInstances[i].ggEvent_varchanged_Map_Pin_active_E();
			}
		});
		player.addListener('varchanged_Room_visibility_1F', function(event) {
			me.__1f_room_panel.logicBlock_visible();
		});
		player.addListener('varchanged_Room_visibility_2F', function(event) {
			me.__2f_room_panel.logicBlock_visible();
			me.__3f_room_panel.logicBlock_visible();
		});
		player.addListener('varchanged_SlideShow_QG', function(event) {
			me._mouse_guide.logicBlock_visible();
			me._laptop_guide.logicBlock_visible();
			me._mobile_guide.logicBlock_visible();
			me._right_arrow_1.logicBlock_visible();
			me._right_arrow_2.logicBlock_visible();
			me._left_arrow_1.logicBlock_visible();
			me._left_arrow_2.logicBlock_visible();
		});
		player.addListener('varchanged_VIS_Levels', function(event) {
			me._firstfloor2.logicBlock_alpha();
			me._secondfloor2.logicBlock_alpha();
		});
		player.addListener('varchanged_tt_active', function(event) {
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_varchanged_tt_active();
			}
			for (var i=0; i < me._enlarge_map0.ggMarkerInstances.length; i++) {
				me._enlarge_map0.ggMarkerInstances[i].ggEvent_varchanged_tt_active();
			}
		});
		player.addListener('viewerinit', function(event) {
			me._cloner_1.ggUpdate();
		});
	};
	function SkinCloner_cloner_1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__1f_rooms=document.createElement('div');
		els=me.__1f_rooms__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1F_Rooms";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 8px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__1f_rooms.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1f_rooms.ggUpdateText();
		el.appendChild(els);
		me.__1f_rooms.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1f_rooms.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","$(cur)");
		}
		me.__1f_rooms.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__1f_rooms);
	};
	function SkinElement_marker_active_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._marker_active=document.createElement('div');
		els=me._marker_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMTIgMzEyIiB3aWR0aD0iMzEyIiBoZWlnaHQ9IjMxMiI+CiA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTE3NV8yMzg0KSI+CiAgPHBhdGggZD0iTTI1OC44MjkgNS43NjQ0N0MyMjguOTI4IC0xMy4xODUgMTk0LjM4NyAtMjMuNTM2NSAxNTguOTkyIC0yNC4xNTU1QzEyMy41OTggLTI0Ljc3NDUgODguNzE2MSAtMTUuNjM3MSA1OC4xNzA2IDIuMjU1MjVMMTU1LjYyMSAxNjguNjIxTDI1OC44MjkgNS43NjQ0N1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xMTc1XzIzODQpIi'+
			'8+CiAgPGNpcmNsZSByPSIzMS4wMzU5IiBjeD0iMTU2LjAzNiIgY3k9IjE1Ni4wMzYiIGZpbGw9IiMzQjlFQ0YiLz4KICA8Y2lyY2xlIHI9IjE3LjgwOTYiIGN4PSIxNTYuMDM0IiBjeT0iMTU2LjAzNiIgZmlsbD0iIzY1QkFFNCIvPgogPC9nPgogPGRlZnM+CiAgPGxpbmVhckdyYWRpZW50IHgxPSIxNTUuMDc0IiB4Mj0iMTU1LjYyMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSIxNTkuOSIgeTI9Ii0yMDMuNDQ1IiBpZD0icGFpbnQwX2xpbmVhcl8xMTc1XzIzODQiPgogICA8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzc4ODg5IiBzdG9w'+
			'LWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8Y2xpcFBhdGggaWQ9ImNsaXAwXzExNzVfMjM4NCI+CiAgIDxyZWN0IGZpbGw9IndoaXRlIiB3aWR0aD0iMzEyIiBoZWlnaHQ9IjMxMiIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+Cjwvc3ZnPgo=';
		me._marker_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 75px;';
		hs+='left : 109px;';
		hs+='position : absolute;';
		hs+='top : 158px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_active.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_active.ggUpdatePosition=function (useTransition) {
		}
	player.addListener('timer', function() { var hs='';
if (me._marker_active.ggParameter) {
	hs+=parameterToTransform(me._marker_active.ggParameter) + ' ';
}
hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
me._marker_active.style.transform=hs; });
	};
	function SkinElement_marker_normal_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._marker_normal=document.createElement('div');
		els=me._marker_normal__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMTIgMzEyIiB3aWR0aD0iMzEyIiBoZWlnaHQ9IjMxMiI+CiA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTE3NV8yMzg0KSI+CiAgPGNpcmNsZSByPSIzMS4wMzU5IiBjeD0iMTU2LjAzNiIgY3k9IjE1Ni4wMzYiIGZpbGw9IiMzQjlFQ0YiLz4KIDwvZz4KIDxkZWZzPgogIDxjbGlwUGF0aCBpZD0iY2xpcDBfMTE3NV8yMzg0Ij4KICAgPHJlY3QgZmlsbD0id2hpdGUiIHdpZHRoPSIzMTIiIGhlaWdodD0iMzEyIi8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KPC9zdmc+Cg==';
		me._marker_normal__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_normal";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 75px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_normal.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_normal.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-518;
		el.ggDy=-65;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) - 518px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) - 65px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.onmouseenter=function (e) {
			me.elementMouseOver['map_pin']=true;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.onmouseleave=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs=basePath + 'images/map_pin_normal.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: 0;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('Map_Pin_Enlarge') == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getVariableValue('Map_Pin_Enlarge') == false))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style.transition='transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.2;
					me._map_pin_normal.ggParameter.sy = 1.2;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					skin.updateSize(me._map_pin_normal);
				}
				else if (me._map_pin_normal.ggCurrentLogicStateScaling == 1) {
					me._map_pin_normal.ggParameter.sx = 2;
					me._map_pin_normal.ggParameter.sy = 2;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					skin.updateSize(me._map_pin_normal);
				}
				else if (me._map_pin_normal.ggCurrentLogicStateScaling == 2) {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					skin.updateSize(me._map_pin_normal);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					skin.updateSize(me._map_pin_normal);
				}
			}
		}
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style.transition='transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha();
		me._map_pin_normal.onmouseenter=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseleave=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_normal);
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs=basePath + 'images/map_pin_active.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((90px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('Map_Pin_active_E') == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getVariableValue('Map_Pin_active_E') == false))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style.transition='transform 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					skin.updateSize(me._map_pin_active);
				}
				else if (me._map_pin_active.ggCurrentLogicStateScaling == 1) {
					me._map_pin_active.ggParameter.sx = 2;
					me._map_pin_active.ggParameter.sy = 2;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					skin.updateSize(me._map_pin_active);
				}
				else if (me._map_pin_active.ggCurrentLogicStateScaling == 2) {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					skin.updateSize(me._map_pin_active);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					skin.updateSize(me._map_pin_active);
				}
			}
		}
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getPanN() == 0))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._map_pin_active.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._map_pin_active.style.transition='transform 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAngle == 0) {
					me._map_pin_active.ggParameter.a = 0;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
				}
				else {
					me._map_pin_active.ggParameter.a = 0;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
				}
			}
		}
		me._map_pin_active.logicBlock_angle();
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style.transition='transform 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_active.onmouseenter=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseleave=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_tt=document.createElement('div');
		els=me._map_pin_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_pin_tt";
		el.ggDx=0;
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 20;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 30px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px 5px 1px 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._map_pin_tt.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_pin_tt.ggUpdateText();
		player.addListener('changenode', function() {
			me._map_pin_tt.ggUpdateText();
		});
		el.appendChild(els);
		me._map_pin_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_tt.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_pin_tt.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_pin_tt.style.transition='left 0s, top 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStatePosition == 0) {
					me._map_pin_tt.style.left = 'calc(50% - (0px / 2))';
					me._map_pin_tt.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -38px)';
				}
				else {
					me._map_pin_tt.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._map_pin_tt.style.top='calc(50% - ((0px + 0px) / 2) + 30px)';
				}
			}
		}
		me._map_pin_tt.logicBlock_position();
		me._map_pin_tt.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('tt_active') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('tt_active') == false))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_tt.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_tt.style.transition='left 0s, top 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateScaling == 0) {
					me._map_pin_tt.ggParameter.sx = 1.5;
					me._map_pin_tt.ggParameter.sy = 1.5;
					me._map_pin_tt.style.transform=parameterToTransform(me._map_pin_tt.ggParameter);
					skin.updateSize(me._map_pin_tt);
				}
				else if (me._map_pin_tt.ggCurrentLogicStateScaling == 1) {
					me._map_pin_tt.ggParameter.sx = 0;
					me._map_pin_tt.ggParameter.sy = 0;
					me._map_pin_tt.style.transform=parameterToTransform(me._map_pin_tt.ggParameter);
					skin.updateSize(me._map_pin_tt);
				}
				else {
					me._map_pin_tt.ggParameter.sx = 1;
					me._map_pin_tt.ggParameter.sy = 1;
					me._map_pin_tt.style.transform=parameterToTransform(me._map_pin_tt.ggParameter);
					skin.updateSize(me._map_pin_tt);
				}
			}
		}
		me._map_pin_tt.logicBlock_scaling();
		me._map_pin_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('tt_active') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('tt_active') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_tt.style.transition='left 0s, top 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateVisible == 0) {
					me._map_pin_tt.style.visibility=(Number(me._map_pin_tt.style.opacity)>0||!me._map_pin_tt.style.opacity)?'inherit':'hidden';
					me._map_pin_tt.ggVisible=true;
				}
				else if (me._map_pin_tt.ggCurrentLogicStateVisible == 1) {
					me._map_pin_tt.style.visibility="hidden";
					me._map_pin_tt.ggVisible=false;
				}
				else {
					me._map_pin_tt.style.visibility=(Number(me._map_pin_tt.style.opacity)>0||!me._map_pin_tt.style.opacity)?'inherit':'hidden';
					me._map_pin_tt.ggVisible=true;
				}
			}
		}
		me._map_pin_tt.logicBlock_visible();
		me._map_pin_tt.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['map_pin'] == true)) && 
				((player._(me.ggUserdata.title) != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_tt.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_tt.style.transition='left 0s, top 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_tt.style.visibility=me._map_pin_tt.ggVisible?'inherit':'hidden';
					me._map_pin_tt.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_tt.style.opacity == 0.0) { me._map_pin_tt.style.visibility="hidden"; } }, 505);
					me._map_pin_tt.style.opacity=0;
				}
			}
		}
		me._map_pin_tt.logicBlock_alpha();
		me._map_pin_tt.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_tt);
		me.elementMouseOver['map_pin']=false;
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
		me.elementMouseOver['map_pin_normal']=false;
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_angle();
		me._map_pin_active.logicBlock_alpha();
		me.elementMouseOver['map_pin_active']=false;
		me._map_pin_tt.logicBlock_position();
		me._map_pin_tt.logicBlock_scaling();
		me._map_pin_tt.logicBlock_visible();
		me._map_pin_tt.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function() {
				me._map_pin_tt.logicBlock_alpha();
			};
			me.ggEvent_changenode=function() {
				me._map_pin_normal.logicBlock_scaling();
				me._map_pin_normal.logicBlock_alpha();
				me._map_pin_active.logicBlock_scaling();
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_tt.logicBlock_scaling();
				me._map_pin_tt.logicBlock_visible();
				me._map_pin_tt.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin_normal.logicBlock_scaling();
				me._map_pin_active.logicBlock_scaling();
				me._map_pin_tt.logicBlock_position();
				me._map_pin_tt.logicBlock_scaling();
				me._map_pin_tt.logicBlock_visible();
				me._map_pin_tt.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._map_pin_tt.logicBlock_position();
			};
			me.ggEvent_positionchanged=function() {
				me._map_pin_active.logicBlock_angle();
			};
			me.ggEvent_varchanged_Map_Pin_Enlarge=function() {
				me._map_pin_normal.logicBlock_scaling();
			};
			me.ggEvent_varchanged_Map_Pin_active_E=function() {
				me._map_pin_active.logicBlock_scaling();
			};
			me.ggEvent_varchanged_tt_active=function() {
				me._map_pin_tt.logicBlock_scaling();
				me._map_pin_tt.logicBlock_visible();
			};
	player.addListener('timer', function() { var hs='';
if (me._map_pin_active.ggParameter) {
	hs+=parameterToTransform(me._map_pin_active.ggParameter) + ' ';
}
hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
me._map_pin_active.style.transform=hs; });
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"$(cur)");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hotspot_name.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._hotspot_name.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_name=document.createElement('div');
		els=me._hotspot_name__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hotspot name";
		el.ggDx=0;
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 50px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(161,161,161,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hotspot_name.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hotspot_name.ggUpdateText();
		player.addListener('changenode', function() {
			me._hotspot_name.ggUpdateText();
		});
		el.appendChild(els);
		me._hotspot_name.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_name.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot_name.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot_name.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot_name.style.transition='opacity 1000ms ease 500ms';
				if (me._hotspot_name.ggCurrentLogicStateAlpha == 0) {
					me._hotspot_name.style.visibility=me._hotspot_name.ggVisible?'inherit':'hidden';
					me._hotspot_name.style.opacity=1;
				}
				else {
					me._hotspot_name.style.visibility=me._hotspot_name.ggVisible?'inherit':'hidden';
					me._hotspot_name.style.opacity=1;
				}
			}
		}
		me._hotspot_name.logicBlock_alpha();
		me._hotspot_name.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._hotspot_name);
		el=me._hotspot_1=document.createElement('div');
		el.ggId="Hotspot_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_1.onmouseenter=function (e) {
			me.elementMouseOver['hotspot_1']=true;
		}
		me._hotspot_1.onmouseleave=function (e) {
			me._hotspot_name.style.transition='none';
			me._hotspot_name.style.visibility='hidden';
			me._hotspot_name.ggVisible=false;
			me.elementMouseOver['hotspot_1']=false;
		}
		me._hotspot_1.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['hotspot_1']) {
				me._hotspot_name.style.transition='none';
				me._hotspot_name.style.visibility=(Number(me._hotspot_name.style.opacity)>0||!me._hotspot_name.style.opacity)?'inherit':'hidden';
				me._hotspot_name.ggVisible=true;
			}
		}
		me._hotspot_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._hotspot_1);
		el=me._hotspot=document.createElement('div');
		el.ggId="Hotspot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot.onmouseenter=function (e) {
			me.elementMouseOver['hotspot']=true;
		}
		me._hotspot.onmouseleave=function (e) {
			me._hotspot_name.style.transition='none';
			me._hotspot_name.style.visibility='hidden';
			me._hotspot_name.ggVisible=false;
			me.elementMouseOver['hotspot']=false;
		}
		me._hotspot.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['hotspot']) {
				me._hotspot_name.style.transition='none';
				me._hotspot_name.style.visibility=(Number(me._hotspot_name.style.opacity)>0||!me._hotspot_name.style.opacity)?'inherit':'hidden';
				me._hotspot_name.ggVisible=true;
			}
		}
		me._hotspot.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._hotspot);
		me.elementMouseOver['ht_node']=false;
		me._hotspot_name.logicBlock_alpha();
		me.elementMouseOver['hotspot_1']=false;
		me.elementMouseOver['hotspot']=false;
		me.ggUse3d=true;
		me.gg3dDistance=800;
			me.hotspotTimerEvent=function() {
				me._hotspot_1.ggUpdateConditionTimer();
				me._hotspot.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};