import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '优脑银河(浙江)科技有限公司',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Neural Galaxy',
          title: 'Neural Galaxy',
          href: 'https://www.neuralgalaxy.cn/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/NeuralGalaxy',
          blankTarget: true,
        },
        {
          key: 'Lynx Group',
          title: 'Lynx Group',
          href: '#'
        },
      ]}
    />
  );
};
