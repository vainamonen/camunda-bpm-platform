/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership. Camunda licenses this file to you under the Apache License,
 * Version 2.0; you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = `<!-- # CE - camunda-commons-ui/lib/widgets/variable/cam-widget-variable-dialog.html -->
<div class="modal-header">
  <h3 translate="CAM_WIDGET_VARIABLE_DIALOG_INSPECT"
      translate-values="{name: variable.name}"></h3>
</div>

<div class="modal-body">
  <div ng-if="readonly"
       class="form-group">
    <label>{{ 'CAM_WIDGET_VARIABLE_DIALOG_LABEL_OBJECT_TYPE' | translate }}</label>
    <code class="form-control-static"
          cam-widget-clipboard="variable.valueInfo.objectTypeName">{{ variable.valueInfo.objectTypeName }}</code>
  </div>

  <div ng-if="readonly"
       class="form-group">
    <label>{{ 'CAM_WIDGET_VARIABLE_DIALOG_LABEL_SERIALIZATION' | translate }}</label>
    <code class="form-control-static"
          cam-widget-clipboard="variable.valueInfo.serializationDataFormat">{{ variable.valueInfo.serializationDataFormat }}</code>
  </div>

  <div ng-if="!readonly"
       class="form-group">
    <label for="object-type-name"
           cam-widget-clipboard="variable.valueInfo.objectTypeName">{{ 'CAM_WIDGET_VARIABLE_DIALOG_LABEL_OBJECT_TYPE' | translate }}</label>
    <input type="text"
           id="object-type-name"
           class="form-control"
           ng-model="variable.valueInfo.objectTypeName" />
  </div>

  <div ng-if="!readonly"
       class="form-group">
    <label for="serialization-data-format"
           cam-widget-clipboard="variable.valueInfo.serializationDataFormat">{{ 'CAM_WIDGET_VARIABLE_DIALOG_LABEL_SERIALIZATION' | translate }}</label>
    <input type="text"
           id="serialization-data-format"
           class="form-control"
           ng-model="variable.valueInfo.serializationDataFormat" />
  </div>

  <div class="form-group">
    <label for="serialized-value"
           cam-widget-clipboard="variable.value"
           no-tooltip
           ng-class="{hovered: hovered === 'var-value'}">{{ 'CAM_WIDGET_VARIABLE_DIALOG_LABEL_SERIALIZED_VALUE' | translate }}</label>
    <textarea ng-model="variable.value"
              id="serialized-value"
              rows="10"
              class="form-control"
              ng-readonly="readonly"
              ng-mouseenter="toggleHover('var-value')"
              ng-mouseleave="toggleHover()"></textarea>
  </div>
</div>

<div class="modal-footer">
  <button class="btn btn-default"
          ng-click="$dismiss('close')">
    {{ 'CAM_WIDGET_VARIABLE_DIALOG_BTN_CLOSE' | translate }}
  </button>

  <button class="btn btn-primary"
          ng-if="!readonly"
          ng-readonly="!hasChanged('serialized')"
          ng-click="$close(variable)">
    {{ 'CAM_WIDGET_VARIABLE_DIALOG_BTN_CHANGE' | translate }}
  </button>
</div>
<!-- / CE - camunda-commons-ui/lib/widgets/variable/cam-widget-variable-dialog.html -->
`;
