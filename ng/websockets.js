angular.module('social-app')
	.run(function($rootScope, $timeout) {
		function webSocketHost() {
			if (window.location.host === "https:"){
				return "wss://" + window.location.host;
			} else {
				return "ws://" + window.location.host;
			}
		}
		(function connect() {
			var connection = new WebSocket(webSocketHost());
			connection.onclose = function() {
				console.log('WebSocket closed. Reconnecting...');
				$timeout(connect, 10 * 1000);
			};
			connection.onmessage = function(e) {
				var payload = JSON.parse(e.data);
				$rootScope.$broadcast('ws:' + payload.topic, payload.data);
			};
		})();
	});
	