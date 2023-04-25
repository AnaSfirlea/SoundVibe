const Routes = Object.freeze({
  BROWSE: "Listen",
  DETAIL: "Details",
});

interface ListenDetailParams {
  songID: number;
}
const NavActions = {
  goToBrowse: () => [Routes.BROWSE],
  goToDetails: (params: ListenDetailParams) => [Routes.DETAIL, { ...params }],
} as any;

export { NavActions, ListenDetailParams };
export default Routes;
