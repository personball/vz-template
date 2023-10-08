import IconAccessibility from '~icons/carbon/accessibility'
import IconAccountBox from '~icons/mdi/account-box'
import IconSetting from '~icons/ep/setting'
import IconDashboard from '~icons/ant-design/dashboard-outlined'
import IconUsers from '~icons/mdi/account-group'
import IconRoles from '~icons/carbon/user-role'
import IconLogging from '~icons/carbon/ibm-cloud-logging'

export function useMenus() {

    const { t } = useI18n()

    const menus = ref(
        [{
            icon: markRaw(IconDashboard),
            title: t('menu.dashboard'),
            url: '/'
        }, {
            icon: markRaw(IconSetting),
            title: t('menu.sys'),
            url: '/sys/',
            children: [{
                icon: markRaw(IconUsers),
                title: t('menu.users'),
                url: '/sys/users',
                acl: 'AbpIdentity.Users'
            }, {
                icon: markRaw(IconRoles),
                title: t('menu.roles'),
                url: '/sys/roles',
                acl: 'AbpIdentity.Roles'
            }, {
                icon: markRaw(IconSetting),
                title: t('menu.settings'),
                url: '/sys/settings',
                acl: {
                    allOf: ['AbpIdentity.Roles', 'AbpIdentity.Users']
                }
            }, {
                icon: markRaw(IconLogging),
                title: t('menu.logs'),
                url: '/sys/logs',
                acl: {
                    anyOf: ['AbpIdentity.Roles', 'AbpIdentity.Users']
                }
            }]
        }, {
            icon: markRaw(IconDashboard),
            title: 'logs',
            url: '/sys/logs',
            acl: ['AbpIdentity.Roles', 'AbpIdentity.Users']
        }])
        
    return { menus }
}