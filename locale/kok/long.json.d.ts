import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kok';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;