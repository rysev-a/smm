import importlib


class AppModules:
    app: object
    initialized = False

    def init_app(self, app):
        self.app = app

        # initialize modules only one time
        if self.initialized:
            return False

        for module_name in self.app.config.get('MODULES'):
            module_path = f'app.modules.{module_name}'
            module = importlib.import_module(module_path)
            module.init()

        self.initialized = True


modules = AppModules()
