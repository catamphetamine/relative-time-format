import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ms-Arab';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;