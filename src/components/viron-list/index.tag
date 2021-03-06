viron-list.List
  .List__item(if="{ hasControlButtons }" onTap="{ handlePrevItemTap }")
    viron-icon-up.List__icon
    .List__label { i18n('cmp.list.back') }
  .List__body(style="height:{ bodyHeight }px")
    .List__itemsWrapper(style="top:-{ bodyTop }px")
      .List__item(each="{ item in list }" onTap="{ handleItemTap }")
        .List__label { item.label }
  .List__item(if="{ hasControlButtons }" onTap="{ handleNextItemTap }")
    viron-icon-down.List__icon
    .List__label { i18n('cmp.list.view') }

  script.
    import '../../components/icons/viron-icon-down/index.tag';
    import '../../components/icons/viron-icon-up/index.tag';
    import script from './index';
    this.external(script);
