import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'be-tarask';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;