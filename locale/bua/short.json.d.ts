import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bua';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;