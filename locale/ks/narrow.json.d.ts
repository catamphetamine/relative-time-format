import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ks';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;