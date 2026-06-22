import { Component } from "react";
import { WHATSAPP_URL } from "../data/contact";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary:", error, info);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="errorFallback">
        <h1>Algo salió mal</h1>
        <p>Estamos al tanto. Mientras tanto puedes contactarnos directamente.</p>
        <div className="errorActions">
          <button className="btn primary" onClick={this.handleReload}>
            Recargar página
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn ghost"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    );
  }
}
