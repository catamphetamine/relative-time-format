import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-MO';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;