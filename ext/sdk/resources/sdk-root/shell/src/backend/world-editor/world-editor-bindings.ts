import { bindApiContribution } from "backend/api/api-contribution";
import { interfaces } from "inversify";
import { WorldEditorMapCompiler } from "./world-editor-map-compiler";
import { WorldEditorService } from "./world-editor-service";

export const bindWorldEditor = (container: interfaces.Container) => {
  container.bind(WorldEditorMapCompiler).toSelf().inSingletonScope();

  container.bind(WorldEditorService).toSelf().inSingletonScope();

  bindApiContribution(container, WorldEditorService);
};
