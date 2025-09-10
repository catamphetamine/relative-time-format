import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ms-Arab';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;