/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);


var servidorWebserver= 'wss://192.168.0.133:5000'

var websocket

function startConnection () {
  websocket = new ReconnectingWebSocket(servidorWebserver)
  websocket.onopen = function (evt) { onOpen(evt) }
  websocket.onclose = function (evt) { onClose(evt) }
  websocket.onmessage = function (evt) { onMessage(evt) }
  websocket.onerror = function (evt) { onError(evt) }
}

function onOpen (evt) {
  console.log('onOpen')
  websocket.send(JSON.stringify({tipo:'login',conteudo:'fabio'}))
}
function onClose (evt) {
}

function onMessage (evt) {
  var msg = evt.data
  console.log(msg)
  document.getElementById('mensagens').innerHTML+=msg+'<br>';

}

function envia(keycode)
{
  if (keycode.key == "Enter") 
  {
    let valor = document.getElementById('msg').value;
    websocket.send(JSON.stringify({tipo:'texto',conteudo:valor}));
    document.getElementById('msg').value='';
  }
}

function onError (evt) {
  console.log(evt)
}

startConnection();
function onDeviceReady() {
   startConnection();
}
