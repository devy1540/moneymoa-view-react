import Keycloak from 'keycloak-js';
import keycloakConfig from '../keycloak.json'

export default class KeycloakService {
    static #instance: Keycloak;
    keycloak: Keycloak;

    constructor() {
        if(KeycloakService.#instance) this.keycloak = KeycloakService.#instance;
        else {
            this.keycloak = new Keycloak(keycloakConfig);
            KeycloakService.#instance = this.keycloak;
        }
    }

    init(renderCallBack: () => void) {
        this.keycloak
            .init({
                onLoad: 'login-required'
            })
            .then((auth) => {
                if(auth) {
                    renderCallBack();
                } else {
                    window.location.reload();
                }
            })
            .catch(() => {
                console.error("Failed to load keycloak service");
            });
    }



    isAuthenticated() {
        return this.keycloak.authenticated;
    }

    getToken() {
        return this.keycloak.token;
    }

    async logout() {
        await this.keycloak.logout();
    }
}

// const keycloakService = new KeycloakService();
// export default keycloakService;