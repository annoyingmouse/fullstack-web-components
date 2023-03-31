import '@annoyingmouse/wc-pagination';

export default {
  title: "Components/WCPagination",
}

const BasicTemplate = ({total, current, pageSize}) => `
  <wc-pagination total="${total}"
                 current="${current}"
                 page-size="${pageSize}"></wc-pagination>
`;

export const Basic = BasicTemplate.bind({});

Basic.args = {
  total: 1000,
  current: 1,
  pageSize: 15,
};