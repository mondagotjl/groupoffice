go.modules.community.addressbook.PhoneNumbersField = Ext.extend(go.form.FormGroup, {
	xtype: "formgroup",
	name: "phoneNumbers",
	addButtonText: t("Add phone number"),
	addButtonIconCls: 'ic-phone',
	itemCfg: {
		items: [{
				xtype: "compositefield",
				hideLabel: true,
				items: [{
						xtype: 'combo',
						name: 'type',
						mode: 'local',
						editable: false,
						triggerAction: 'all',
						store: {
							xtype: "arraystore",
							idIndex: 0,
							fields: [
								'value',
								'display'
							],
							data: go.modules.community.addressbook.typeStoreData('phoneTypes')
						},
						valueField: 'value',
						displayField: 'display',
						width: dp(140),
						value: "work"
					}, {
						flex: 1,
						xtype: "textfield",
						allowBlank: false,
						name: "number",
						setFocus: true
					}]
			}]
	}
});
