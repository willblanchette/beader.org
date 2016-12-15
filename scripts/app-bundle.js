define('app',['exports', 'aurelia-router', 'aurelia-framework', 'aurelia-auth'], function (exports, _aureliaRouter, _aureliaFramework, _aureliaAuth) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_aureliaAuth.AuthService, _aureliaAuth.FetchConfig), _dec(_class = function () {
    function App(auth, fetchConfig) {
      _classCallCheck(this, App);

      this.displayName = '';

      this.auth = auth;
      this.fetchConfig = fetchConfig;
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.title = 'Contacts';
      config.map([{ route: '', moduleId: 'designer', title: 'Beader.org' }, { route: 'designer', moduleId: 'designer', name: 'designer' }]);

      this.router = router;
    };

    App.prototype.activate = function activate() {
      this.fetchConfig.configure();
      this.fetchUser();
    };

    App.prototype.fetchUser = function fetchUser() {
      var _this = this;

      this.auth.getMe().then(function (data) {
        return _this.displayName = data.displayName;
      });
    };

    App.prototype.authenticate = function authenticate(name) {
      var _this2 = this;

      return this.auth.authenticate(name, false, null).then(function (response) {
        _this2.fetchUser();
      });
    };

    App.prototype.logout = function logout() {
      return this.auth.logout().then(function (response) {});
    };

    App.prototype.deactivate = function deactivate() {
      this.subscription.dispose();
    };

    _createClass(App, [{
      key: 'isAuthenticated',
      get: function get() {
        var isAuthenticated = this.auth.isAuthenticated();
        return isAuthenticated;
      }
    }]);

    return App;
  }()) || _class);
});
define('auth-config',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var config = {
    profileUrl: 'https://beader-api.herokuapp.com/auth',
    providers: {
      google: {
        clientId: '204545753423-3igb69ajb3be6ftc6mu8ftkgmvqe3hcv.apps.googleusercontent.com',
        url: 'https://beader-api.herokuapp.com/auth'
      }
    }
  };

  exports.default = config;
});
define('designer',['exports', 'aurelia-framework', 'aurelia-fetch-client'], function (exports, _aureliaFramework, _aureliaFetchClient) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Designer = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Designer = exports.Designer = (_dec = (0, _aureliaFramework.inject)(_aureliaFetchClient.HttpClient), _dec(_class = function () {
    function Designer(http) {
      _classCallCheck(this, Designer);

      this.colors = ['000000', '002000', '003400', '006700', '009b00', '00ce00', '00ff00', '070707', '000035', '003333', '006731', '009b2c', '00ce23', '00ff10', '0e0e0e', '000068', '003268', '006667', '009a64', '00ce62', '00ff5d', '151515', '00009c', '002f9c', '00659b', '009a9a', '00cd98', '00ff95', '1c1c1c', '0000d0', '0029cf', '0063cf', '0099cf', '00cccd', '00ffcc', '232323', '0000ff', '0021ff', '0060ff', '0096ff', '00cbff', '00ffff', '2a2a2a', '340000', '333300', '316700', '2d9a00', '26ce00', '1bff00', '313131', '340034', '333333', '316731', '2d9a2b', '26ce22', '1aff0f', '383838', '330068', '333268', '306666', '2d9a64', '26ce61', '1aff5c', '3f3f3f', '32009b', '332f9c', '30649a', '2d999a', '25cd98', '19ff96', '464646', '3300d0', '3129cf', '3063cf', '2c99cf', '24cccd', '17ffcb', '4d4d4d', '3100ff', '3021ff', '2e60ff', '2a96ff', '23cbff', '15ffff', '545454', '670000', '673300', '676700', '649a00', '62ce00', '5fff00', '5b5b5b', '670033', '673332', '666730', '659a2a', '62ce21', '5eff0b', '626262', '670068', '673167', '666666', '649a64', '61cd60', '5eff5c', '696969', '67009c', '672e9c', '66659b', '64999a', '61cd97', '5eff95', '707070', '6600cf', '6729d0', '6663cf', '6498ce', '62cdcd', '5dffcb', '777777', '6700ff', '6621ff', '655fff', '6497ff', '61cbff', '5dffff', '7e7e7e', '9b0000', '9a3200', '9a6700', '999a00', '98ce00', '96ff00', '858585', '9a0031', '9b3230', '9a672e', '999a28', '98ce1e', '96ff05', '8c8c8c', '9b0067', '9a3066', '9a6665', '999a64', '97cd60', '95ff5b', '939393', '9b009b', '9a2d9a', '9a659a', '999999', '98cd97', '95ff94', '9a9a9a', '9a00cf', '9a28cf', '9a63cf', '9897cd', '97cccc', '95ffcb', 'a1a1a1', '9a00ff', '9a1fff', '995fff', '9997ff', '97cbff', '95ffff', 'a8a8a8', 'cf0000', 'cf3200', 'ce6600', 'cd9a00', 'cdce00', 'cbff00', 'afafaf', 'cf002e', 'ce312d', 'ce662a', 'cd9a24', 'cccd19', 'cbff00', 'b6b6b6', 'ce0065', 'ce3065', 'cd6563', 'cd9962', 'cccd5e', 'cbff5a', 'bdbdbd', 'ce009a', 'ce2d9a', 'cd6499', 'cd9998', 'cccc96', 'cbff94', 'c4c4c4', 'ce00cf', 'ce27ce', 'ce62ce', 'cd97cd', 'cccccc', 'cbffcb', 'cbcbcb', 'ce00ff', 'ce1eff', 'cd5fff', 'cd96ff', 'cccbff', 'caffff', 'd2d2d2', 'ff0000', 'ff3000', 'ff6600', 'ff9a00', 'ffce00', 'ffff00', 'd9d9d9', 'ff002a', 'ff3028', 'ff6525', 'ff991e', 'ffcd0f', 'ffff00', 'e0e0e0', 'ff0064', 'ff2e64', 'ff6563', 'ff9960', 'ffcd5d', 'ffff58', 'e7e7e7', 'ff0099', 'ff2b99', 'ff6398', 'ff9998', 'ffcd96', 'ffff92', 'eeeeee', 'ff00ce', 'ff25ce', 'ff61cd', 'ff98cd', 'ffcccb', 'ffffc9', 'f5f5f5', 'ff00ff', 'ff1cff', 'ff5eff', 'ff96ff', 'ffcbff', 'ffffff'];
      this.width = 10;
      this.height = 10;
      this.name = 'Untitled Pattern';
      this.align = 'normal';
      this.mode = 'brush';
      this.color = '000000';
      this.clearColor = 'ffffff';
      this.drawing = false;
      this.pattern = [];

      this.http = http;
    }

    Designer.prototype.attached = function attached() {

      $('#color').css('backgroundColor', '#' + this.color);

      for (var ii = 0; ii < this.width * this.height; ii++) {
        this.pattern.push(this.clearColor);
      }

      this.renderPalette();
      this.renderGrid();
    };

    Designer.prototype.renderPalette = function renderPalette() {
      var palette = $('#palette')[0];
      var context = palette.getContext('2d');

      var width = ($(palette).width() - 1) / 7 - 1;
      var height = ($(palette).height() - 1) / 36 - 1;

      for (var y = 0; y < 36; y++) {
        for (var x = 0; x < 7; x++) {
          context.beginPath();
          context.fillStyle = '#' + this.colors[y * 7 + x];
          context.fillRect(x * (width + 1), y * (height + 1), width, height);
          context.strokeStyle = '#ffffff';
          context.lineWidth = 1;
          context.stroke();
        }
      }
    };

    Designer.prototype.selectColor = function selectColor($event) {
      var palette = $('#palette')[0];
      var context = palette.getContext('2d');

      var width = Math.floor(($(palette).width() - 1) / 7 - 1);
      var height = Math.floor(($(palette).height() - 1) / 36 - 1);

      var offsetX = $event.pageX - $(palette).offset().left;
      var offsetY = $event.pageY - $(palette).offset().top;

      var x = Math.floor(offsetX / (width + 1));
      var y = Math.floor(offsetY / (height + 1));

      this.color = this.colors[y * 7 + x];

      $('#color').css('backgroundColor', '#' + this.color);
    };

    Designer.prototype.setMode = function setMode(mode) {
      this.mode = mode;
    };

    Designer.prototype.setAlign = function setAlign(align) {
      this.align = align;
      this.renderGrid();
    };

    Designer.prototype.startDrawing = function startDrawing($event) {
      this.drawing = true;
    };

    Designer.prototype.stopDrawing = function stopDrawing($event) {
      this.drawing = false;
    };

    Designer.prototype.drag = function drag($event) {
      if (this.drawing && this.mode == 'brush') {
        this.draw($event);
      }
    };

    Designer.prototype.click = function click($event) {
      if (this.mode == 'brush') {
        this.stopDrawing($event);
        this.draw($event);
      }

      if (this.mode == 'fill') {
        var canvas = $('#grid')[0];
        var context = canvas.getContext('2d');

        var size = this.width > this.height ? $(canvas).width() / width : $(canvas).height() / this.height;
        var x = Math.floor($event.offsetX / size);
        var y = Math.floor($event.offsetY / size);

        this.fill($event, x, y);
      }
    };

    Designer.prototype.getPatternCell = function getPatternCell(x, y) {
      return this.pattern[x + y * this.width];
    };

    Designer.prototype.setPatternCell = function setPatternCell(x, y, color) {
      this.pattern[x + y * this.width] = color;
    };

    Designer.prototype.draw = function draw($event) {
      var canvas = $('#grid')[0];
      var context = canvas.getContext('2d');

      var size = this.width > this.height ? $(canvas).width() / width : $(canvas).height() / this.height;
      var x = Math.floor($event.offsetX / size);
      var y = Math.floor($event.offsetY / size);

      this.setPatternCell(x, y, this.color);
      this.renderGrid($event);
    };

    Designer.prototype.fill = function fill($event, x, y) {
      var oldColor = this.getPatternCell(x, y) || this.clearColor;
      if (oldColor == $.color) return;

      var stack = [[x, y]];

      while (stack.length) {

        var cell = stack.pop();
        var _x = cell[0];
        var _y = cell[1];

        this.setPatternCell(_x, _y, this.color);

        if (_x - 1 >= 0 && oldColor == (this.getPatternCell(_x - 1, _y) || 'ffffff')) stack.push([_x - 1, _y]);

        if (_x + 1 < this.width && oldColor == (this.getPatternCell(_x + 1, _y) || 'ffffff')) stack.push([_x + 1, _y]);

        if (_y - 1 >= 0 && oldColor == (this.getPatternCell(_x, _y - 1) || 'ffffff')) stack.push([_x, _y - 1]);

        if (_y + 1 < this.height && oldColor == (this.getPatternCell(_x, _y + 1) || 'ffffff')) stack.push([_x, _y + 1]);
      }

      this.renderGrid($event);
    };

    Designer.prototype.renderGrid = function renderGrid($event) {
      var canvas = $('#grid');
      var context = canvas[0].getContext('2d');

      var size = this.width > this.height ? canvas.width() / this.width : canvas.height() / this.height;

      if (this.align !== 'normal') {
        size = this.width > this.height ? size - size / this.width / 2 : size - size / this.height / 2;
      }

      var horizontalOffset = this.align == 'horizontal' ? size / 2 : 0;
      var verticalOffset = this.align == 'vertical' ? size / 2 : 0;

      canvas.attr('width', canvas.attr('width'));

      for (var x = 0; x < this.width; x++) {
        for (var y = 0; y < this.height; y++) {
          context.beginPath();
          context.arc(x * size + size / 2 + (y % 2 ? horizontalOffset : 0), y * size + size / 2 + (x % 2 ? verticalOffset : 0), size / 2 - 1, 0, 2 * Math.PI, false);
          context.fillStyle = '#' + (this.getPatternCell(x, y) || this.clearColor);
          context.fill();
          context.lineWidth = 1;
          context.strokeStyle = '#ddd';
          context.stroke();
        }
      }
    };

    Designer.prototype.save = function save() {
      $('#save-button').prop('disabled', true);
      $('#save-button').text('Saving...');

      var canvas = $('#grid');
      var http = new _aureliaFetchClient.HttpClient();

      this.http.fetch('https://beader-api.herokuapp.com/patterns', {
        method: 'post',
        body: (0, _aureliaFetchClient.json)({
          name: this.name,
          description: '',
          width: this.width,
          height: this.height,
          align: this.align,
          pattern: this.pattern,
          image: canvas[0].toDataURL('image/png')
        })
      }).then(function (response) {
        $('#save-button').prop('disabled', false);
        $('#save-button').text('Save');
      }).catch(function (error) {
        alert('Error: ' + error);
      });
    };

    return Designer;
  }()) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment', './auth-config'], function (exports, _environment, _authConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  var _authConfig2 = _interopRequireDefault(_authConfig);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').plugin('aurelia-auth', function (baseConfig) {
      baseConfig.configure(_authConfig2.default);
    });

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('aurelia-auth/auth-service',['exports', 'aurelia-dependency-injection', 'aurelia-fetch-client', 'aurelia-event-aggregator', './authentication', './base-config', './oAuth1', './oAuth2', './auth-utilities'], function (exports, _aureliaDependencyInjection, _aureliaFetchClient, _aureliaEventAggregator, _authentication, _baseConfig, _oAuth, _oAuth2, _authUtilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AuthService = undefined;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var AuthService = exports.AuthService = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaFetchClient.HttpClient, _authentication.Authentication, _oAuth.OAuth1, _oAuth2.OAuth2, _baseConfig.BaseConfig, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
    function AuthService(http, auth, oAuth1, oAuth2, config, eventAggregator) {
      _classCallCheck(this, AuthService);

      this.http = http;
      this.auth = auth;
      this.oAuth1 = oAuth1;
      this.oAuth2 = oAuth2;
      this.config = config.current;
      this.tokenInterceptor = auth.tokenInterceptor;
      this.eventAggregator = eventAggregator;
    }

    AuthService.prototype.getMe = function getMe() {
      var profileUrl = this.auth.getProfileUrl();
      return this.http.fetch(profileUrl).then(_authUtilities.status);
    };

    AuthService.prototype.isAuthenticated = function isAuthenticated() {
      return this.auth.isAuthenticated();
    };

    AuthService.prototype.getTokenPayload = function getTokenPayload() {
      return this.auth.getPayload();
    };

    AuthService.prototype.setToken = function setToken(token) {
      this.auth.setToken(Object.defineProperty({}, this.config.tokenName, { value: token }));
    };

    AuthService.prototype.signup = function signup(displayName, email, password) {
      var _this = this;

      var signupUrl = this.auth.getSignupUrl();
      var content = void 0;
      if (_typeof(arguments[0]) === 'object') {
        content = arguments[0];
      } else {
        content = {
          'displayName': displayName,
          'email': email,
          'password': password
        };
      }

      return this.http.fetch(signupUrl, {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(content)
      }).then(_authUtilities.status).then(function (response) {
        if (_this.config.loginOnSignup) {
          _this.auth.setToken(response);
        } else if (_this.config.signupRedirect) {
          window.location.href = _this.config.signupRedirect;
        }
        _this.eventAggregator.publish('auth:signup', response);
        return response;
      });
    };

    AuthService.prototype.login = function login(email, password) {
      var _this2 = this;

      var loginUrl = this.auth.getLoginUrl();
      var content = void 0;
      if (typeof arguments[1] !== 'string') {
        content = arguments[0];
      } else {
        content = {
          'email': email,
          'password': password
        };
      }

      return this.http.fetch(loginUrl, {
        method: 'post',
        headers: typeof content === 'string' ? { 'Content-Type': 'application/x-www-form-urlencoded' } : {},
        body: typeof content === 'string' ? content : (0, _aureliaFetchClient.json)(content)
      }).then(_authUtilities.status).then(function (response) {
        _this2.auth.setToken(response);
        _this2.eventAggregator.publish('auth:login', response);
        return response;
      });
    };

    AuthService.prototype.logout = function logout(redirectUri) {
      var _this3 = this;

      return this.auth.logout(redirectUri).then(function () {
        _this3.eventAggregator.publish('auth:logout');
      });
    };

    AuthService.prototype.authenticate = function authenticate(name, redirect, userData) {
      var _this4 = this;

      var provider = this.oAuth2;
      if (this.config.providers[name].type === '1.0') {
        provider = this.oAuth1;
      }

      return provider.open(this.config.providers[name], userData || {}).then(function (response) {
        _this4.auth.setToken(response, redirect);
        _this4.eventAggregator.publish('auth:authenticate', response);
        return response;
      });
    };

    AuthService.prototype.unlink = function unlink(provider) {
      var _this5 = this;

      var unlinkUrl = this.config.baseUrl ? (0, _authUtilities.joinUrl)(this.config.baseUrl, this.config.unlinkUrl) : this.config.unlinkUrl;

      if (this.config.unlinkMethod === 'get') {
        return this.http.fetch(unlinkUrl + provider).then(_authUtilities.status).then(function (response) {
          _this5.eventAggregator.publish('auth:unlink', response);
          return response;
        });
      } else if (this.config.unlinkMethod === 'post') {
        return this.http.fetch(unlinkUrl, {
          method: 'post',
          body: (0, _aureliaFetchClient.json)(provider)
        }).then(_authUtilities.status).then(function (response) {
          _this5.eventAggregator.publish('auth:unlink', response);
          return response;
        });
      }
    };

    return AuthService;
  }()) || _class);
});
define('aurelia-auth/authentication',['exports', 'aurelia-dependency-injection', './base-config', './storage', './auth-utilities'], function (exports, _aureliaDependencyInjection, _baseConfig, _storage, _authUtilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Authentication = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _dec, _class;

  var Authentication = exports.Authentication = (_dec = (0, _aureliaDependencyInjection.inject)(_storage.Storage, _baseConfig.BaseConfig), _dec(_class = function () {
    function Authentication(storage, config) {
      _classCallCheck(this, Authentication);

      this.storage = storage;
      this.config = config.current;
      this.tokenName = this.config.tokenPrefix ? this.config.tokenPrefix + '_' + this.config.tokenName : this.config.tokenName;
      this.idTokenName = this.config.tokenPrefix ? this.config.tokenPrefix + '_' + this.config.idTokenName : this.config.idTokenName;
    }

    Authentication.prototype.getLoginRoute = function getLoginRoute() {
      return this.config.loginRoute;
    };

    Authentication.prototype.getLoginRedirect = function getLoginRedirect() {
      return this.initialUrl || this.config.loginRedirect;
    };

    Authentication.prototype.getLoginUrl = function getLoginUrl() {
      return this.config.baseUrl ? (0, _authUtilities.joinUrl)(this.config.baseUrl, this.config.loginUrl) : this.config.loginUrl;
    };

    Authentication.prototype.getSignupUrl = function getSignupUrl() {
      return this.config.baseUrl ? (0, _authUtilities.joinUrl)(this.config.baseUrl, this.config.signupUrl) : this.config.signupUrl;
    };

    Authentication.prototype.getProfileUrl = function getProfileUrl() {
      return this.config.baseUrl ? (0, _authUtilities.joinUrl)(this.config.baseUrl, this.config.profileUrl) : this.config.profileUrl;
    };

    Authentication.prototype.getToken = function getToken() {
      return this.storage.get(this.tokenName);
    };

    Authentication.prototype.getPayload = function getPayload() {
      var token = this.storage.get(this.tokenName);
      return this.decomposeToken(token);
    };

    Authentication.prototype.decomposeToken = function decomposeToken(token) {
      if (token && token.split('.').length === 3) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

        try {
          return JSON.parse(decodeURIComponent(escape(window.atob(base64))));
        } catch (error) {
          return null;
        }
      }
    };

    Authentication.prototype.setInitialUrl = function setInitialUrl(url) {
      this.initialUrl = url;
    };

    Authentication.prototype.setToken = function setToken(response, redirect) {
      var accessToken = response && response[this.config.responseTokenProp];
      var tokenToStore = void 0;

      if (accessToken) {
        if ((0, _authUtilities.isObject)(accessToken) && (0, _authUtilities.isObject)(accessToken.data)) {
          response = accessToken;
        } else if ((0, _authUtilities.isString)(accessToken)) {
          tokenToStore = accessToken;
        }
      }

      if (!tokenToStore && response) {
        tokenToStore = this.config.tokenRoot && response[this.config.tokenRoot] ? response[this.config.tokenRoot][this.config.tokenName] : response[this.config.tokenName];
      }

      if (tokenToStore) {
        this.storage.set(this.tokenName, tokenToStore);
      }

      var idToken = response && response[this.config.responseIdTokenProp];

      if (idToken) {
        this.storage.set(this.idTokenName, idToken);
      }

      if (this.config.loginRedirect && !redirect) {
        window.location.href = this.getLoginRedirect();
      } else if (redirect && (0, _authUtilities.isString)(redirect)) {
        window.location.href = window.encodeURI(redirect);
      }
    };

    Authentication.prototype.removeToken = function removeToken() {
      this.storage.remove(this.tokenName);
    };

    Authentication.prototype.isAuthenticated = function isAuthenticated() {
      var token = this.storage.get(this.tokenName);

      if (!token) {
        return false;
      }

      if (token.split('.').length !== 3) {
        return true;
      }

      var exp = void 0;
      try {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        exp = JSON.parse(window.atob(base64)).exp;
      } catch (error) {
        return false;
      }

      if (exp) {
        return Math.round(new Date().getTime() / 1000) <= exp;
      }

      return true;
    };

    Authentication.prototype.logout = function logout(redirect) {
      var _this = this;

      return new Promise(function (resolve) {
        _this.storage.remove(_this.tokenName);

        if (_this.config.logoutRedirect && !redirect) {
          window.location.href = _this.config.logoutRedirect;
        } else if ((0, _authUtilities.isString)(redirect)) {
          window.location.href = redirect;
        }

        resolve();
      });
    };

    _createClass(Authentication, [{
      key: 'tokenInterceptor',
      get: function get() {
        var config = this.config;
        var storage = this.storage;
        var auth = this;
        console.log('token interceptor');
        return {
          request: function request(_request) {
            console.log('Interceptor!');
            if (auth.isAuthenticated() && config.httpInterceptor) {
              var tokenName = config.tokenPrefix ? config.tokenPrefix + '_' + config.tokenName : config.tokenName;
              var token = storage.get(tokenName);

              if (config.authHeader && config.authToken) {
                token = config.authToken + ' ' + token;
              }

              _request.headers.set(config.authHeader, token);
            }
            return _request;
          }
        };
      }
    }]);

    return Authentication;
  }()) || _class);
});

define('aurelia-auth/base-config',['exports', './auth-utilities'], function (exports, _authUtilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BaseConfig = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var BaseConfig = exports.BaseConfig = function () {
    BaseConfig.prototype.configure = function configure(incomingConfig) {
      (0, _authUtilities.merge)(this._current, incomingConfig);
    };

    _createClass(BaseConfig, [{
      key: 'current',
      get: function get() {
        return this._current;
      }
    }]);

    function BaseConfig() {
      _classCallCheck(this, BaseConfig);

      this._current = {
        httpInterceptor: true,
        loginOnSignup: true,
        baseUrl: '/',
        loginRedirect: '#/',
        logoutRedirect: '#/',
        signupRedirect: '#/login',
        loginUrl: '/auth/login',
        signupUrl: '/auth/signup',
        profileUrl: '/auth/me',
        loginRoute: '/login',
        signupRoute: '/signup',
        tokenRoot: false,
        tokenName: 'token',
        idTokenName: 'id_token',
        tokenPrefix: 'aurelia',
        responseTokenProp: 'access_token',
        responseIdTokenProp: 'id_token',
        unlinkUrl: '/auth/unlink/',
        unlinkMethod: 'get',
        authHeader: 'Authorization',
        authToken: 'Bearer',
        withCredentials: true,
        platform: 'browser',
        storage: 'localStorage',
        providers: {
          identSrv: {
            name: 'identSrv',
            url: '/auth/identSrv',

            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            scope: ['profile', 'openid'],
            responseType: 'code',
            scopePrefix: '',
            scopeDelimiter: ' ',
            requiredUrlParams: ['scope', 'nonce'],
            optionalUrlParams: ['display', 'state'],
            state: function state() {
              var rand = Math.random().toString(36).substr(2);
              return encodeURIComponent(rand);
            },
            display: 'popup',
            type: '2.0',
            clientId: 'jsClient',
            nonce: function nonce() {
              var val = ((Date.now() + Math.random()) * Math.random()).toString().replace('.', '');
              return encodeURIComponent(val);
            },
            popupOptions: { width: 452, height: 633 }
          },
          google: {
            name: 'google',
            url: '/auth/google',
            authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            scope: ['profile', 'email'],
            scopePrefix: 'openid',
            scopeDelimiter: ' ',
            requiredUrlParams: ['scope'],
            optionalUrlParams: ['display', 'state'],
            display: 'popup',
            type: '2.0',
            state: function state() {
              var rand = Math.random().toString(36).substr(2);
              return encodeURIComponent(rand);
            },
            popupOptions: {
              width: 452,
              height: 633
            }
          },
          facebook: {
            name: 'facebook',
            url: '/auth/facebook',
            authorizationEndpoint: 'https://www.facebook.com/v2.3/dialog/oauth',
            redirectUri: window.location.origin + '/' || window.location.protocol + '//' + window.location.host + '/',
            scope: ['email'],
            scopeDelimiter: ',',
            nonce: function nonce() {
              return Math.random();
            },
            requiredUrlParams: ['nonce', 'display', 'scope'],
            display: 'popup',
            type: '2.0',
            popupOptions: {
              width: 580,
              height: 400
            }
          },
          linkedin: {
            name: 'linkedin',
            url: '/auth/linkedin',
            authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            requiredUrlParams: ['state'],
            scope: ['r_emailaddress'],
            scopeDelimiter: ' ',
            state: 'STATE',
            type: '2.0',
            popupOptions: {
              width: 527,
              height: 582
            }
          },
          github: {
            name: 'github',
            url: '/auth/github',
            authorizationEndpoint: 'https://github.com/login/oauth/authorize',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            optionalUrlParams: ['scope'],
            scope: ['user:email'],
            scopeDelimiter: ' ',
            type: '2.0',
            popupOptions: {
              width: 1020,
              height: 618
            }
          },
          yahoo: {
            name: 'yahoo',
            url: '/auth/yahoo',
            authorizationEndpoint: 'https://api.login.yahoo.com/oauth2/request_auth',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            scope: [],
            scopeDelimiter: ',',
            type: '2.0',
            popupOptions: {
              width: 559,
              height: 519
            }
          },
          twitter: {
            name: 'twitter',
            url: '/auth/twitter',
            authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
            type: '1.0',
            popupOptions: {
              width: 495,
              height: 645
            }
          },
          live: {
            name: 'live',
            url: '/auth/live',
            authorizationEndpoint: 'https://login.live.com/oauth20_authorize.srf',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            scope: ['wl.emails'],
            scopeDelimiter: ' ',
            requiredUrlParams: ['display', 'scope'],
            display: 'popup',
            type: '2.0',
            popupOptions: {
              width: 500,
              height: 560
            }
          },
          instagram: {
            name: 'instagram',
            url: '/auth/instagram',
            authorizationEndpoint: 'https://api.instagram.com/oauth/authorize',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            requiredUrlParams: ['scope'],
            scope: ['basic'],
            scopeDelimiter: '+',
            display: 'popup',
            type: '2.0',
            popupOptions: {
              width: 550,
              height: 369
            }
          }
        }
      };
    }

    return BaseConfig;
  }();
});
define('aurelia-auth/auth-utilities',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.status = status;
  exports.isDefined = isDefined;
  exports.camelCase = camelCase;
  exports.parseQueryString = parseQueryString;
  exports.isString = isString;
  exports.isObject = isObject;
  exports.isFunction = isFunction;
  exports.joinUrl = joinUrl;
  exports.isBlankObject = isBlankObject;
  exports.isArrayLike = isArrayLike;
  exports.isWindow = isWindow;
  exports.extend = extend;
  exports.merge = merge;
  exports.forEach = forEach;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var slice = [].slice;

  function setHashKey(obj, h) {
    if (h) {
      obj.$$hashKey = h;
    } else {
      delete obj.$$hashKey;
    }
  }

  function baseExtend(dst, objs, deep) {
    var h = dst.$$hashKey;

    for (var i = 0, ii = objs.length; i < ii; ++i) {
      var obj = objs[i];
      if (!isObject(obj) && !isFunction(obj)) continue;
      var keys = Object.keys(obj);
      for (var j = 0, jj = keys.length; j < jj; j++) {
        var key = keys[j];
        var src = obj[key];

        if (deep && isObject(src)) {
          if (!isObject(dst[key])) dst[key] = Array.isArray(src) ? [] : {};
          baseExtend(dst[key], [src], true);
        } else {
          dst[key] = src;
        }
      }
    }

    setHashKey(dst, h);
    return dst;
  }

  function status(response) {
    if (response.status >= 200 && response.status < 400) {
      return response.json().catch(function (error) {
        return null;
      });
    }

    throw response;
  }

  function isDefined(value) {
    return typeof value !== 'undefined';
  }

  function camelCase(name) {
    return name.replace(/([\:\-\_]+(.))/g, function (_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    });
  }

  function parseQueryString(keyValue) {
    var key = void 0;
    var value = void 0;
    var obj = {};

    forEach((keyValue || '').split('&'), function (kv) {
      if (kv) {
        value = kv.split('=');
        key = decodeURIComponent(value[0]);
        obj[key] = isDefined(value[1]) ? decodeURIComponent(value[1]) : true;
      }
    });

    return obj;
  }

  function isString(value) {
    return typeof value === 'string';
  }

  function isObject(value) {
    return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
  }

  function isFunction(value) {
    return typeof value === 'function';
  }

  function joinUrl(baseUrl, url) {
    if (/^(?:[a-z]+:)?\/\//i.test(url)) {
      return url;
    }

    var joined = [baseUrl, url].join('/');
    var normalize = function normalize(str) {
      return str.replace(/[\/]+/g, '/').replace(/\/\?/g, '?').replace(/\/\#/g, '#').replace(/\:\//g, '://');
    };

    return normalize(joined);
  }

  function isBlankObject(value) {
    return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !Object.getPrototypeOf(value);
  }

  function isArrayLike(obj) {
    if (obj === null || isWindow(obj)) {
      return false;
    }
  }

  function isWindow(obj) {
    return obj && obj.window === obj;
  }

  function extend(dst) {
    return baseExtend(dst, slice.call(arguments, 1), false);
  }

  function merge(dst) {
    return baseExtend(dst, slice.call(arguments, 1), true);
  }

  function forEach(obj, iterator, context) {
    var key = void 0;
    var length = void 0;
    if (obj) {
      if (isFunction(obj)) {
        for (key in obj) {
          if (key !== 'prototype' && key !== 'length' && key !== 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(key))) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      } else if (Array.isArray(obj) || isArrayLike(obj)) {
        var isPrimitive = (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object';
        for (key = 0, length = obj.length; key < length; key++) {
          if (isPrimitive || key in obj) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      } else if (obj.forEach && obj.forEach !== forEach) {
        obj.forEach(iterator, context, obj);
      } else if (isBlankObject(obj)) {
        for (key in obj) {
          iterator.call(context, obj[key], key, obj);
        }
      } else if (typeof obj.hasOwnProperty === 'function') {
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      } else {
        for (key in obj) {
          if (hasOwnProperty.call(obj, key)) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      }
    }
    return obj;
  }
});
define('aurelia-auth/storage',['exports', 'aurelia-dependency-injection', './base-config'], function (exports, _aureliaDependencyInjection, _baseConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Storage = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Storage = exports.Storage = (_dec = (0, _aureliaDependencyInjection.inject)(_baseConfig.BaseConfig), _dec(_class = function () {
    function Storage(config) {
      _classCallCheck(this, Storage);

      this.config = config.current;
      this.storage = this._getStorage(this.config.storage);
    }

    Storage.prototype.get = function get(key) {
      return this.storage.getItem(key);
    };

    Storage.prototype.set = function set(key, value) {
      return this.storage.setItem(key, value);
    };

    Storage.prototype.remove = function remove(key) {
      return this.storage.removeItem(key);
    };

    Storage.prototype._getStorage = function _getStorage(type) {
      if (type === 'localStorage') {
        if ('localStorage' in window && window.localStorage !== null) return localStorage;
        throw new Error('Local Storage is disabled or unavailable.');
      } else if (type === 'sessionStorage') {
        if ('sessionStorage' in window && window.sessionStorage !== null) return sessionStorage;
        throw new Error('Session Storage is disabled or unavailable.');
      }

      throw new Error('Invalid storage type specified: ' + type);
    };

    return Storage;
  }()) || _class);
});
define('aurelia-auth/oAuth1',['exports', 'aurelia-dependency-injection', './auth-utilities', './storage', './popup', './base-config', 'aurelia-fetch-client'], function (exports, _aureliaDependencyInjection, _authUtilities, _storage, _popup, _baseConfig, _aureliaFetchClient) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.OAuth1 = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var OAuth1 = exports.OAuth1 = (_dec = (0, _aureliaDependencyInjection.inject)(_storage.Storage, _popup.Popup, _aureliaFetchClient.HttpClient, _baseConfig.BaseConfig), _dec(_class = function () {
    function OAuth1(storage, popup, http, config) {
      _classCallCheck(this, OAuth1);

      this.storage = storage;
      this.config = config.current;
      this.popup = popup;
      this.http = http;
      this.defaults = {
        url: null,
        name: null,
        popupOptions: null,
        redirectUri: null,
        authorizationEndpoint: null
      };
    }

    OAuth1.prototype.open = function open(options, userData) {
      var _this = this;

      var current = (0, _authUtilities.extend)({}, this.defaults, options);
      var serverUrl = this.config.baseUrl ? (0, _authUtilities.joinUrl)(this.config.baseUrl, current.url) : current.url;

      if (this.config.platform !== 'mobile') {
        this.popup = this.popup.open('', current.name, current.popupOptions, current.redirectUri);
      }
      return this.http.fetch(serverUrl, {
        method: 'post'
      }).then(_authUtilities.status).then(function (response) {
        if (_this.config.platform === 'mobile') {
          _this.popup = _this.popup.open([current.authorizationEndpoint, _this.buildQueryString(response)].join('?'), current.name, current.popupOptions, current.redirectUri);
        } else {
          _this.popup.popupWindow.location = [current.authorizationEndpoint, _this.buildQueryString(response)].join('?');
        }

        var popupListener = _this.config.platform === 'mobile' ? _this.popup.eventListener(current.redirectUri) : _this.popup.pollPopup();
        return popupListener.then(function (result) {
          return _this.exchangeForToken(result, userData, current);
        });
      });
    };

    OAuth1.prototype.exchangeForToken = function exchangeForToken(oauthData, userData, current) {
      var data = (0, _authUtilities.extend)({}, userData, oauthData);
      var exchangeForTokenUrl = this.config.baseUrl ? (0, _authUtilities.joinUrl)(this.config.baseUrl, current.url) : current.url;
      var credentials = this.config.withCredentials ? 'include' : 'same-origin';

      return this.http.fetch(exchangeForTokenUrl, {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(data),
        credentials: credentials
      }).then(_authUtilities.status);
    };

    OAuth1.prototype.buildQueryString = function buildQueryString(obj) {
      var str = [];
      (0, _authUtilities.forEach)(obj, function (value, key) {
        return str.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
      });
      return str.join('&');
    };

    return OAuth1;
  }()) || _class);
});
define('aurelia-auth/popup',['exports', './auth-utilities', './base-config', 'aurelia-dependency-injection'], function (exports, _authUtilities, _baseConfig, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Popup = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Popup = exports.Popup = (_dec = (0, _aureliaDependencyInjection.inject)(_baseConfig.BaseConfig), _dec(_class = function () {
    function Popup(config) {
      _classCallCheck(this, Popup);

      this.config = config.current;
      this.popupWindow = null;
      this.polling = null;
      this.url = '';
    }

    Popup.prototype.open = function open(url, windowName, options, redirectUri) {
      this.url = url;
      var optionsString = this.stringifyOptions(this.prepareOptions(options || {}));
      this.popupWindow = window.open(url, windowName, optionsString);
      if (this.popupWindow && this.popupWindow.focus) {
        this.popupWindow.focus();
      }

      return this;
    };

    Popup.prototype.eventListener = function eventListener(redirectUri) {
      var self = this;
      var promise = new Promise(function (resolve, reject) {
        self.popupWindow.addEventListener('loadstart', function (event) {
          if (event.url.indexOf(redirectUri) !== 0) {
            return;
          }

          var parser = document.createElement('a');
          parser.href = event.url;

          if (parser.search || parser.hash) {
            var queryParams = parser.search.substring(1).replace(/\/$/, '');
            var hashParams = parser.hash.substring(1).replace(/\/$/, '');
            var hash = (0, _authUtilities.parseQueryString)(hashParams);
            var qs = (0, _authUtilities.parseQueryString)(queryParams);

            (0, _authUtilities.extend)(qs, hash);

            if (qs.error) {
              reject({
                error: qs.error
              });
            } else {
              resolve(qs);
            }

            self.popupWindow.close();
          }
        });

        popupWindow.addEventListener('exit', function () {
          reject({
            data: 'Provider Popup was closed'
          });
        });

        popupWindow.addEventListener('loaderror', function () {
          deferred.reject({
            data: 'Authorization Failed'
          });
        });
      });
      return promise;
    };

    Popup.prototype.pollPopup = function pollPopup() {
      var _this = this;

      var self = this;
      var promise = new Promise(function (resolve, reject) {
        _this.polling = setInterval(function () {
          try {
            var documentOrigin = document.location.host;
            var popupWindowOrigin = self.popupWindow.location.host;

            if (popupWindowOrigin === documentOrigin && (self.popupWindow.location.search || self.popupWindow.location.hash)) {
              var queryParams = self.popupWindow.location.search.substring(1).replace(/\/$/, '');
              var hashParams = self.popupWindow.location.hash.substring(1).replace(/[\/$]/, '');
              var hash = (0, _authUtilities.parseQueryString)(hashParams);
              var qs = (0, _authUtilities.parseQueryString)(queryParams);

              (0, _authUtilities.extend)(qs, hash);

              if (qs.error) {
                reject({
                  error: qs.error
                });
              } else {
                resolve(qs);
              }

              self.popupWindow.close();
              clearInterval(self.polling);
            }
          } catch (error) {}

          if (!self.popupWindow) {
            clearInterval(self.polling);
            reject({
              data: 'Provider Popup Blocked'
            });
          } else if (self.popupWindow.closed) {
            clearInterval(self.polling);
            reject({
              data: 'Problem poll popup'
            });
          }
        }, 35);
      });
      return promise;
    };

    Popup.prototype.prepareOptions = function prepareOptions(options) {
      var width = options.width || 500;
      var height = options.height || 500;
      return (0, _authUtilities.extend)({
        width: width,
        height: height,
        left: window.screenX + (window.outerWidth - width) / 2,
        top: window.screenY + (window.outerHeight - height) / 2.5
      }, options);
    };

    Popup.prototype.stringifyOptions = function stringifyOptions(options) {
      var parts = [];
      (0, _authUtilities.forEach)(options, function (value, key) {
        parts.push(key + '=' + value);
      });
      return parts.join(',');
    };

    return Popup;
  }()) || _class);
});
define('aurelia-auth/oAuth2',['exports', 'aurelia-dependency-injection', './auth-utilities', './storage', './popup', './base-config', './authentication', 'aurelia-fetch-client'], function (exports, _aureliaDependencyInjection, _authUtilities, _storage, _popup, _baseConfig, _authentication, _aureliaFetchClient) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.OAuth2 = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var OAuth2 = exports.OAuth2 = (_dec = (0, _aureliaDependencyInjection.inject)(_storage.Storage, _popup.Popup, _aureliaFetchClient.HttpClient, _baseConfig.BaseConfig, _authentication.Authentication), _dec(_class = function () {
    function OAuth2(storage, popup, http, config, auth) {
      _classCallCheck(this, OAuth2);

      this.storage = storage;
      this.config = config.current;
      this.popup = popup;
      this.http = http;
      this.auth = auth;
      this.defaults = {
        url: null,
        name: null,
        state: null,
        scope: null,
        scopeDelimiter: null,
        redirectUri: null,
        popupOptions: null,
        authorizationEndpoint: null,
        responseParams: null,
        requiredUrlParams: null,
        optionalUrlParams: null,
        defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
        responseType: 'code'
      };
    }

    OAuth2.prototype.open = function open(options, userData) {
      var _this = this;

      var current = (0, _authUtilities.extend)({}, this.defaults, options);

      var stateName = current.name + '_state';

      if ((0, _authUtilities.isFunction)(current.state)) {
        this.storage.set(stateName, current.state());
      } else if ((0, _authUtilities.isString)(current.state)) {
        this.storage.set(stateName, current.state);
      }

      var nonceName = current.name + '_nonce';

      if ((0, _authUtilities.isFunction)(current.nonce)) {
        this.storage.set(nonceName, current.nonce());
      } else if ((0, _authUtilities.isString)(current.nonce)) {
        this.storage.set(nonceName, current.nonce);
      }

      var url = current.authorizationEndpoint + '?' + this.buildQueryString(current);

      var openPopup = void 0;
      if (this.config.platform === 'mobile') {
        openPopup = this.popup.open(url, current.name, current.popupOptions, current.redirectUri).eventListener(current.redirectUri);
      } else {
        openPopup = this.popup.open(url, current.name, current.popupOptions, current.redirectUri).pollPopup();
      }

      return openPopup.then(function (oauthData) {
        if (oauthData.state && oauthData.state !== _this.storage.get(stateName)) {
          return Promise.reject('OAuth 2.0 state parameter mismatch.');
        }

        if (current.responseType.toUpperCase().indexOf('TOKEN') !== -1) {
          if (!_this.verifyIdToken(oauthData, current.name)) {
            return Promise.reject('OAuth 2.0 Nonce parameter mismatch.');
          }

          return oauthData;
        }

        return _this.exchangeForToken(oauthData, userData, current);
      });
    };

    OAuth2.prototype.verifyIdToken = function verifyIdToken(oauthData, providerName) {
      var idToken = oauthData && oauthData[this.config.responseIdTokenProp];
      if (!idToken) return true;
      var idTokenObject = this.auth.decomposeToken(idToken);
      if (!idTokenObject) return true;
      var nonceFromToken = idTokenObject.nonce;
      if (!nonceFromToken) return true;
      var nonceInStorage = this.storage.get(providerName + '_nonce');
      if (nonceFromToken !== nonceInStorage) {
        return false;
      }
      return true;
    };

    OAuth2.prototype.exchangeForToken = function exchangeForToken(oauthData, userData, current) {
      var data = (0, _authUtilities.extend)({}, userData, {
        code: oauthData.code,
        clientId: current.clientId,
        redirectUri: current.redirectUri
      });

      if (oauthData.state) {
        data.state = oauthData.state;
      }

      (0, _authUtilities.forEach)(current.responseParams, function (param) {
        return data[param] = oauthData[param];
      });

      var exchangeForTokenUrl = this.config.baseUrl ? (0, _authUtilities.joinUrl)(this.config.baseUrl, current.url) : current.url;
      var credentials = this.config.withCredentials ? 'include' : 'same-origin';

      return this.http.fetch(exchangeForTokenUrl, {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(data),
        credentials: credentials
      }).then(_authUtilities.status);
    };

    OAuth2.prototype.buildQueryString = function buildQueryString(current) {
      var _this2 = this;

      var keyValuePairs = [];
      var urlParams = ['defaultUrlParams', 'requiredUrlParams', 'optionalUrlParams'];

      (0, _authUtilities.forEach)(urlParams, function (params) {
        (0, _authUtilities.forEach)(current[params], function (paramName) {
          var camelizedName = (0, _authUtilities.camelCase)(paramName);
          var paramValue = (0, _authUtilities.isFunction)(current[paramName]) ? current[paramName]() : current[camelizedName];

          if (paramName === 'state') {
            var stateName = current.name + '_state';
            paramValue = encodeURIComponent(_this2.storage.get(stateName));
          }

          if (paramName === 'nonce') {
            var nonceName = current.name + '_nonce';
            paramValue = encodeURIComponent(_this2.storage.get(nonceName));
          }

          if (paramName === 'scope' && Array.isArray(paramValue)) {
            paramValue = paramValue.join(current.scopeDelimiter);

            if (current.scopePrefix) {
              paramValue = [current.scopePrefix, paramValue].join(current.scopeDelimiter);
            }
          }

          keyValuePairs.push([paramName, paramValue]);
        });
      });

      return keyValuePairs.map(function (pair) {
        return pair.join('=');
      }).join('&');
    };

    return OAuth2;
  }()) || _class);
});
define('aurelia-auth/authorize-step',['exports', 'aurelia-dependency-injection', 'aurelia-router', './authentication'], function (exports, _aureliaDependencyInjection, _aureliaRouter, _authentication) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AuthorizeStep = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var AuthorizeStep = exports.AuthorizeStep = (_dec = (0, _aureliaDependencyInjection.inject)(_authentication.Authentication), _dec(_class = function () {
    function AuthorizeStep(auth) {
      _classCallCheck(this, AuthorizeStep);

      this.auth = auth;
    }

    AuthorizeStep.prototype.run = function run(routingContext, next) {
      var isLoggedIn = this.auth.isAuthenticated();
      var loginRoute = this.auth.getLoginRoute();

      if (routingContext.getAllInstructions().some(function (i) {
        return i.config.auth;
      })) {
        if (!isLoggedIn) {
          this.auth.setInitialUrl(window.location.href);
          return next.cancel(new _aureliaRouter.Redirect(loginRoute));
        }
      } else if (isLoggedIn && routingContext.getAllInstructions().some(function (i) {
        return i.fragment === loginRoute;
      })) {
        var loginRedirect = this.auth.getLoginRedirect();
        return next.cancel(new _aureliaRouter.Redirect(loginRedirect));
      }

      return next();
    };

    return AuthorizeStep;
  }()) || _class);
});
define('aurelia-auth/auth-fetch-config',['exports', 'aurelia-dependency-injection', 'aurelia-fetch-client', './authentication'], function (exports, _aureliaDependencyInjection, _aureliaFetchClient, _authentication) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FetchConfig = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var FetchConfig = exports.FetchConfig = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaFetchClient.HttpClient, _authentication.Authentication), _dec(_class = function () {
    function FetchConfig(httpClient, authService) {
      _classCallCheck(this, FetchConfig);

      this.httpClient = httpClient;
      this.auth = authService;
    }

    FetchConfig.prototype.configure = function configure() {
      var _this = this;

      this.httpClient.configure(function (httpConfig) {
        httpConfig.withDefaults({
          headers: {
            'Accept': 'application/json'
          }
        }).withInterceptor(_this.auth.tokenInterceptor);
      });
    };

    return FetchConfig;
  }()) || _class);
});
define('aurelia-auth/auth-filter',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var AuthFilterValueConverter = exports.AuthFilterValueConverter = function () {
    function AuthFilterValueConverter() {
      _classCallCheck(this, AuthFilterValueConverter);
    }

    AuthFilterValueConverter.prototype.toView = function toView(routes, isAuthenticated) {
      return routes.filter(function (r) {
        return r.config.auth === undefined || r.config.auth === isAuthenticated;
      });
    };

    return AuthFilterValueConverter;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <require from=\"./styles.css\"></require>\n\n  <header class=\"navbar navbar-fixed-top\">\n    <div class=\"navbar-inner\">\n      <div class=\"container\">\n        <a class=\"pull-left\" href=\"/\"><img src=\"/images/logo.png\"></a>\n        <ul class=\"nav pull-right\">\n          <li><a href=\"/\">Pattern Gallery</a></li>\n          <li><a href=\"/create\">Design a Pattern</a></li>\n          <li if.bind=\"!isAuthenticated\">\n            <a click.delegate=\"authenticate('google')\" class=\"btn\">Sign in with Google</a>\n          </li>\n          <li if.bind=\"isAuthenticated\">\n            <a class=\"btn\">Welcome ${displayName}</a>\n            <a class=\"btn\" click.trigger=\"logout()\">Log Out</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </header>\n  <router-view class=\"container\"></router-view>\n</template>\n"; });
define('text!styles.css', ['module'], function(module) { module.exports = "body {\n  background: #666 url(\"../images/bg.png\");\n}\nheader .navbar-inner {\n  height: 40px;\n  background: #1d3966 url(\"../images/header.png\");\n  border-bottom: 1px solid #224;\n}\narticle.container {\n  background: #fff;\n  margin-top: 50px;\n  padding: 10px;\n  position: relative;\n}\n.navbar .nav > li {\n  border-left: 1px solid #060d18;\n}\n.navbar .nav > li > a {\n  color: rgba(255,255,255,0.8);\n  text-shadow: 1px 1px 0px rgba(0,0,0,0.8);\n  border-left: 1px solid #2d569a;\n  font-size: 13px;\n}\n.navbar .nav > li > a:hover {\n  color: #fff;\n}\n.navbar .nav li.dropdown.open>.dropdown-toggle,\n.navbar .nav li.dropdown.active>.dropdown-toggle,\n.navbar .nav li.dropdown.open.active>.dropdown-toggle {\n  background: transparent;\n  color: #fff;\n}\n.navbar .dropdown-menu {\n  border: none;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  border-radius: 0;\n  padding: 10px;\n}\n.navbar .dropdown-menu form {\n  margin-bottom: 0;\n}\n.navbar .dropdown-menu input {\n  height: 30px;\n}\n.navbar .dropdown-menu button {\n  margin-top: 0;\n}\n.navbar .dropdown-menu .alert {\n  margin-bottom: 10px;\n  display: none;\n}\n#forgot-password {\n  line-height: 30px;\n}\n#forgot-form {\n  display: none;\n}\n/*\n * Index styles\n */\n.thumbs a {\n  text-decoration: none;\n}\n.thumb {\n  display: inline-block;\n  position: relative;\n  width: 133px;\n  height: 133px;\n  margin: 10px;\n  padding: 5px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border: none;\n  -webkit-box-shadow: 0px 0px 5px rgba(0,0,0,0.2);\n  -moz-box-shadow: 0px 0px 5px rgba(0,0,0,0.2);\n  box-shadow: 0px 0px 5px rgba(0,0,0,0.2);\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n}\n/*\n *  Designer styles\n */\n#palette-wrapper {\n  position: relative;\n  border: 1px solid #ccc;\n  padding: 3px 1px 1px 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  -o-border-radius: 3px;\n  -ms-border-radius: 3px;\n  border-radius: 3px;\n  background: #fff;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n#color-wrapper {\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  -o-border-radius: 3px;\n  -ms-border-radius: 3px;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  padding: 3px;\n  margin-bottom: 10px;\n}\n#palette,\n#palette:active {\n  cursor: hand;\n  cursor: pointer;\n}\n#color {\n  width: 132px;\n  height: 64px;\n}\n#toolbar .btn-group {\n  margin: 0 0 5px 0;\n}\n#meta {\n  padding-bottom: 10px;\n}\n#meta select {\n  margin: 0 10px;\n}\n#meta input {\n  margin-left: 10px;\n  width: 369px;\n}\n#save-button {\n  width: 100%;\n  margin-bottom: 10px;\n}\n#grid,\n#grid:active {\n  cursor: hand;\n  cursor: pointer;\n}\n/*\n * Bootstrap overrides\n */\n.alert {\n  margin-bottom: 0;\n}\n/*\n  * Utility classes\n  */\n.hidden {\n  display: none;\n}\n"; });
define('text!designer.html', ['module'], function(module) { module.exports = "<template>\n  <div id=\"editor\">\n    <div class=\"row\">\n      <div class=\"span2\">\n        <div id=\"color-wrapper\">\n          <div id=\"color\"></div>\n        </div>\n\n        <div id=\"palette-wrapper\">\n          <canvas click.trigger=\"selectColor($event)\" id=\"palette\" width=\"133\" height=\"600\"></canvas>\n        </div>\n      </div>\n\n      <div class=\"span9\">\n        <div class=\"form-inline\" id=\"meta\">\n          <label>Width: </label>\n\n          <select value.bind=\"width\" class=\"input-mini\" id=\"width\" value=\"20\">\n            <option value=\"10\">10</option>\n          </select>\n\n          <label>Height: </label>\n\n          <select value.bind=\"height\" class=\"input-mini\" id=\"width\" value=\"20\">\n            <option value=\"10\">10</option>\n          </select>\n\n          <label>Name: </label>\n\n          <input value.bind=\"name\" type=\"text\" id=\"name\" placeholder=\"Pattern Name\">\n        </div>\n\n        <canvas mousemove.delegate=\"drag($event)\" mouseup.trigger=\"click($event)\" mousedown.trigger=\"startDrawing($event)\" mouseleave.trigger=\"stopDrawing($event)\" id=\"grid\" width=\"700\" height=\"700\"></canvas>\n      </div>\n\n      <div class=\"span1\" id=\"toolbar\">\n        <div class=\"btn-group btn-group-vertical\" data-toggle=\"buttons-radio\">\n          <button class=\"btn ${align == 'normal' ? 'active' : ''}\" click.delegate=\"setAlign('normal')\" id=\"align-normal\">\n            <img src=\"/images/align-normal.png\" width=\"30\" height=\"30\">\n          </button>\n          <button class=\"btn ${align == 'horizontal' ? 'active' : ''}\" click.delegate=\"setAlign('horizontal')\" id=\"align-horizontal\">\n            <img src=\"/images/align-horizontal.png\" width=\"30\" height=\"30\">\n          </button>\n          <button class=\"btn ${align == 'vertical' ? 'active' : ''}\" click.delegate=\"setAlign('vertical')\" id=\"align-vertical\">\n            <img src=\"/images/align-vertical.png\" width=\"30\" height=\"30\">\n          </button>\n        </div>\n\n        <div class=\"btn-group btn-group-vertical\" data-toggle=\"buttons-radio\">\n          <button class=\"btn ${mode == 'brush' ? 'active' : ''}\" click.delegate=\"setMode('brush')\" id=\"mode-brush\">\n            <img src=\"/images/brush.png\" width=\"30\" height=\"30\">\n          </button>\n          <button class=\"btn ${mode == 'fill' ? 'active' : ''}\" click.delegate=\"setMode('fill')\" id=\"mode-fill\">\n            <img src=\"/images/fill.png\" width=\"30\" height=\"30\">\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"palette-highlight\"></div>\n    <label id=\"save-error\"></label>\n  </div>\n\n  <button click.trigger=\"save()\" class=\"btn btn-success\" id=\"save-button\">Save</button>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map