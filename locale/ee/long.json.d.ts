import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ee';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;