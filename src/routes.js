import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import GlobalStyle from "./styles/global";

import { isAuthenticated } from "./services/auth";

// Adicionar o import
import SignUp from "./pages/signup";
import Main from "./pages/main";

/**
 * Componente privado que pega todas as propriedades de Route e separa 
 * em Componente = qual compoenete será renderizado e pega todo o resto dos
 * parametros com o ...rest
 * 
 * Cria um novo Route passando o ...rest (path, exact)
 * Renderiza um componente passando as propos, de acordo com o resultado do 
 * isAuthenticated: true=> renderiza o Componente normal que foi passado 
 * false=> redireciona para root, mantendo o estato do propos.location
 * para manter historico da navegação. 
 * 
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
		<GlobalStyle/>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={() => <h1>Login</h1>} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/app" component={() => <h1>App</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;