import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fi';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;