import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ee';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;