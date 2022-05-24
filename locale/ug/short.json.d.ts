import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ug';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;