import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kk-Arab';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;