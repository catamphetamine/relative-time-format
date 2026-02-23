import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kk-Arab';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;