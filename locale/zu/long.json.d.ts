import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'zu';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;