import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-MO';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;